import axios from 'axios';
import { Option } from '../components/ui/dropdown';
import { CustomField, Issue, IssueTypeSchema, JiraResponse, RoadmapInformation } from './interfaces/jira';
import { parseJiraIssues } from './roadmap';

const jiraBaseUrl = 'https://sitecore.atlassian.net/rest/api/3';
const JIRA_USERNAME = process.env.JIRA_USERNAME;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

export const excludedProducts = ['Content Hub DAM', 'Content Hub Ops', 'Analytics', 'Content Hub ONE', 'Portal'];

export enum Phase {
  NOW = 'Now',
  NEXT = 'Next',
  DONE = 'Done',
  FUTURE = 'Future',
}
enum FilterOption {
  Equals = '=',
  NotEquals = '!=',
}
interface JiraIssueType {
  id: string;
  self: string;
  description: string;
  iconUrl: string;
  name: string;
}

interface JiraIssuePriority {
  id: string;
  self: string;
  description: string;
  iconUrl: string;
  name: string;
}

interface JiraProjectResult {
  id: string;
  self: string;
  description: string;
  issueTypes: Array<JiraIssueType>;
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${JIRA_USERNAME}:${JIRA_API_TOKEN}`).toString('base64')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data: ' + response.statusText);
  }
  const data: T = await response.json();

  return data;
}

function createJqlString(filters: { key: string; value: string; operator: FilterOption }[]): string {
  return filters.map((filter) => `${filter.key}${filter.operator}${filter.value}`).join('%20AND%20');
}

export async function GetJiraResponse(): Promise<JiraResponse> {
  // Get all issues from Jira where external roadmap is set to 1 (true)

  const fields = [
    'summary',
    'description',
    'status',
    'customfield_15180', // Roadmap phase
    'customfield_15258', // Product
    'customfield_15555', // Speaker notes
    'customfield_15423', // Marketing title
    'attachment',
  ];

  const filters = [
    { key: 'project', value: 'SMAP', operator: FilterOption.Equals },
    { key: 'cf[15395]', value: '1', operator: FilterOption.Equals }, // External roadmap
    { key: 'cf[17325]', value: 'EMPTY', operator: FilterOption.Equals }, // Idea archived
    { key: 'status', value: 'archived', operator: FilterOption.NotEquals }, // second archived status
    { key: 'cf[15180]', value: '"Won\'t do"', operator: FilterOption.NotEquals }, // phase does not equal "Won't do"
  ];

  const jqlString = createJqlString(filters);
  const roadmapAPI = `${jiraBaseUrl}/search/jql?jql=${jqlString}&fields=${fields.join(',')}&expand=names&maxResults=100&expand=renderedFields`;
  const response: JiraResponse = await fetchData<JiraResponse>(roadmapAPI);

  let allIssues = response.issues;
  let startAt = response.startAt + response.maxResults;

  while (allIssues.length < response.total) {
    const paginatedAPI = `${roadmapAPI}&startAt=${startAt}`;
    const paginatedResponse = await fetchData<JiraResponse>(paginatedAPI);
    allIssues = allIssues.concat(paginatedResponse.issues);
    startAt += paginatedResponse.maxResults;
  }

  response.issues = allIssues;
  return response;
}

export async function GetJiraAttachement(id: string) {
  const imageUrl = `${jiraBaseUrl}/attachment/content/${id}`;

  const response = await axios({
    url: imageUrl,
    method: 'get',
    headers: {
      Authorization: `Basic ${Buffer.from(`${JIRA_USERNAME}:${JIRA_API_TOKEN}`).toString('base64')}`,
      Accept: 'application/json',
    },
    responseType: 'arraybuffer', // This is to handle binary data (like an image)
  });

  return response;
}

export async function getRoadmap(): Promise<RoadmapInformation> {
  const jiraResponse = await GetJiraResponse();
  const products = await getProductsAsOptions(jiraResponse.issues);

  const roadmapInformation: RoadmapInformation = {
    items: parseJiraIssues(jiraResponse.issues),
    products: products,
  };

  return roadmapInformation;
}

export async function getProducts(issues: any[]): Promise<string[]> {
  const products = issues.flatMap((issue: Issue) => issue.fields.customfield_15258 || []).map((label: CustomField) => label.value);

  const uniqueProducts = [...new Set(products)];
  return uniqueProducts;
}

export async function getProductsAsOptions(issues: Issue[]): Promise<Array<Option>> {
  const options: Option[] = [];

  issues.forEach((issue: Issue) => {
    if (issue.fields.customfield_15258) {
      issue.fields.customfield_15258.forEach((field: CustomField) => {
        if (!options.some((existingOption) => existingOption.value === field.id)) {
          if (!excludedProducts.includes(field.value)) {
            options.push({ label: field.value, value: field.id });
          }
        }
      });
    }
  });

  return options;
}

export function getBadgeColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'done':
      return 'green';
    case 'now':
      return 'primary';
    case 'next':
      return 'orange';
    case 'future':
      return 'gray';
    default:
      return 'gray';
  }
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'done':
      return 'green';
    case 'new':
      return 'primary';
    case 'discovery':
      return 'yellow';
    case 'delivery':
      return 'teal';
    default:
      return 'gray';
  }
}

export async function getIssueTypeSchema({ projectKey, issueTypeId }: { projectKey: string; issueTypeId: string }): Promise<IssueTypeSchema> {
  const response = await fetch(`${jiraBaseUrl}/issue/createmeta/${projectKey}/issuetypes/${issueTypeId}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: 'Basic ' + Buffer.from(JIRA_USERNAME! + ':' + JIRA_API_TOKEN!).toString('base64'),
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.text();

    throw Error(error);
  }

  return (await response.json()) as IssueTypeSchema;
}

export async function postJiraIssue({
  summary,
  projectKey = 'PRDSCS',
  issueTypeId = '11808',
  product,
  name,
  email,
  description,
  url,
}: {
  summary: string;
  projectKey: string;
  issueTypeId: string;
  product?: string[];
  name?: string;
  email?: string;
  description?: string;
  url?: string;
}): Promise<{ id: string; key: string }> {
  console.log('posting the new jira ticket...');

  let productValue: any[] = [];

  if (product) {
    const schema = await getIssueTypeSchema({ projectKey, issueTypeId });

    product.map((p) => {
      const productField = schema.fields.find((field) => field.name === 'Products');
      const foundProduct = productField?.allowedValues?.find((x) => x.value?.toLowerCase() === p.toLowerCase());
      if (foundProduct) {
        productValue.push(foundProduct);
      }
    });

    if (productValue.length == 0) {
      throw console.error('Product not found in the allowed values');
    }
  }

  const response = await fetch(`${jiraBaseUrl}/issue`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Authorization: 'Basic ' + Buffer.from(JIRA_USERNAME! + ':' + JIRA_API_TOKEN!).toString('base64'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        customfield_16781: productValue,
        summary: `[FEEDBACK] ${summary}`,
        project: {
          key: projectKey,
        },
        issuetype: {
          id: issueTypeId,
        },
        description: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: description,
                  type: 'text',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  text: '\nINFO:\nurl: ',
                  type: 'text',
                },
                {
                  type: 'inlineCard',
                  attrs: {
                    url: url ?? '-',
                  },
                },
                {
                  text: `\nname: ${name == null || name == '' ? '-' : name}`,
                  type: 'text',
                },
                {
                  text: `\nemail: ${email == null || email == '' ? '-' : email}`,
                  type: 'text',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Ticket automatically created from the feedback form on the developer portal.',
                  type: 'text',
                },
              ],
            },
          ],
        },
        labels: ['external-feedback'],
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();

    throw Error('ticket not ok! ' + error);
  }

  // return (await response.json()) as { id: string; key: string };
  return { id: '123', key: 'PRDSCS-123' };
}