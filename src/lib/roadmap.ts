import { Issue } from './interfaces/jira';

export interface IRoadmapItem {
  id: number;
  key: string;
  roadmapPhase: string;
  product: RoadmapProduct[];
  description?: string;
  title: string;
  attachments: RoadmapAttachment[];
  status: string;
}
export interface RoadmapProduct {
  name: string;
  id: string;
}
export interface RoadmapAttachment {
  filename: string;
  mimeType: string;
  content: string;
  thumbnail: string;
}

export function parseJiraIssues(issues: Issue[]) {
  return issues.map(parseJiraIssue);
}

export function parseJiraIssue(issue: Issue) {
  const roadmapPhase = issue.fields.customfield_15180?.value;
  const product: RoadmapProduct[] = issue.fields.customfield_15258?.map((label) => ({ name: label.value, id: label.id })) || [];
  const description = issue.fields.customfield_15555; // || issue.fields.description;
  const title = issue.fields.customfield_15423 || issue.fields.summary;
  const attachments = issue.fields.attachment.map((attachment) => ({
    filename: attachment.filename,
    mimeType: attachment.mimeType,
    content: attachment.content,
    thumbnail: attachment.thumbnail != undefined ? attachment.thumbnail : null,
  }));
  const status = issue.fields.status.name;

  return {
    id: parseInt(issue.id),
    key: issue.key,
    roadmapPhase,
    product,
    description,
    title,
    attachments,
    status,
  } as IRoadmapItem;
}
