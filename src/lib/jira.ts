import axios from 'axios';
import { Option } from '../components/ui/dropdown';
import { CustomField, Issue, JiraResponse, RoadmapInformation } from './interfaces/jira';
import { parseJiraIssues } from './roadmap';

const jiraBaseUrl = 'https://sitecore.atlassian.net/rest/api/3';
const JIRA_USERNAME = process.env.JIRA_USERNAME;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

export enum Phase {
  NOW = 'Now',
  NEXT = 'Next',
  DONE = 'Done',
  FUTURE = 'Future',
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${JIRA_USERNAME}:${JIRA_API_TOKEN}`).toString('base64')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: T = await response.json();
  return data;
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

  const roadmapAPI = `${jiraBaseUrl}/search?jql=project=SMAP%20AND%20cf[15395]=%221%22&fields=${fields.join(',')}&expand=names&maxResults=100`;

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
          options.push({ label: field.value, value: field.id });
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