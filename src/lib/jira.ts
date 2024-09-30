const jiraBaseUrl = 'https://sitecore.atlassian.net/rest/api/3/search';
const JIRA_USERNAME = process.env.JIRA_USERNAME;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

enum RoadmapField {
  NOW = 'NOW',
  NEXT = 'NEXT',
  DONE = 'DONE',
  FUTURE = 'FUTURE',
}

async function getRoadmapItems(fieldValue: string): Promise<JiraResponse> {
  const roadmapAPI = `${jiraBaseUrl}?jql=project=SMAP%20AND%20cf[15180]=%22${fieldValue}%22&fields=summary,status,customfield_15180,customfield_15258&expand=names`;

  const response = await fetch(roadmapAPI, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${JIRA_USERNAME}:${JIRA_API_TOKEN}`).toString('base64')}`,
    },
  });

  if (response.ok) {
    const jiraResponse: JiraResponse = await response.json();
    return jiraResponse;
  } else {
    throw new Error('Failed to fetch Jira response');
  }
}

export async function getRoadmap(): Promise<RoadmapInformation> {
  const roadmap: RoadmapInformation = {
    now: await getRoadmapItems(RoadmapField.NOW),
    next: await getRoadmapItems(RoadmapField.NEXT),
    done: await getRoadmapItems(RoadmapField.DONE),
    future: await getRoadmapItems(RoadmapField.FUTURE),
  };

  return roadmap;
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
