import type { Issue } from './interfaces/jira';

export interface IRoadmapItem {
  id: number;
  key: string;
  roadmapPhase: string;
  product: RoadmapProduct[];
  description: string;
  title: string;
  attachments: RoadmapAttachment[];
  status: string;
  changelogLink: string;
}
export interface RoadmapProduct {
  name: string;
  id: string;
}
export interface RoadmapAttachment {
  id: string;
  filename: string;
  mimeType: string;
  content: string;
  thumbnail: string;
  url: string;
}

export function parseJiraIssues(issues: Issue[]) {
  return issues.map(parseJiraIssue);
}

export function extractFirstThreeJiraListItems(content: string): string {
  if (!content) {
    return '';
  }

  const targetTitles = ['why now', 'what changes', 'business outcome'];
  const headingRegex = /<ol\b[^>]*>\s*<li\b[^>]*>\s*(?:<b>|<strong>)?\s*(why now|what changes|business outcome)\s*[:;]?\s*(?:<\/b>|<\/strong>)?\s*<\/li>\s*<\/ol>/gi;
  const matches = Array.from(content.matchAll(headingRegex));

  // When content does not meet the headings
  if (matches.length === 0) {
    return 'Warning: The content does not contain the expected headings. Please ensure that the content includes the following headings: "Why Now", "What Changes", and "Business Outcome".';
  }

  const selectedSections: string[] = [];

  for (let i = 0; i < matches.length; i += 1) {
    const match = matches[i];
    const title = (match[1] ?? '').trim().toLowerCase();

    if (!targetTitles.includes(title)) {
      continue;
    }

    const startIndex = (match.index ?? 0) + match[0].length;
    const nextListIndex = content.slice(startIndex).search(/<\s*ol\b/i);
    const endIndex = nextListIndex === -1 ? content.length : startIndex + nextListIndex;
    const sectionBody = content.slice(startIndex, endIndex).trim();
    const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);

    selectedSections.push(`<ol><li><b>${displayTitle}:</b></li></ol>${sectionBody}`);

    if (selectedSections.length === 3) {
      break;
    }
  }

  return selectedSections.length > 0 ? selectedSections.join('') : content;
}

function replaceImageUrls(content: string): string {
  const regex = /\/rest\/api\/3\/attachment\/content\/(\d+)/g;
  return content.replace(regex, '/api/roadmap/image?id=$1');
}

export function parseJiraIssue(issue: Issue) {
  const roadmapPhase = issue.fields.customfield_22391?.value;
  const product: RoadmapProduct[] =
    issue.fields.customfield_24688?.map((label) => ({
      name: label.value,
      id: label.id,
    })) || [];
  const description = extractFirstThreeJiraListItems(replaceImageUrls(issue.renderedFields?.description || ''));

  const title = issue.fields.customfield_15423 || issue.fields.summary;
  const attachments = issue.fields.attachment
    .filter((x) => x.mimeType.includes('image'))
    .map((attachment) => ({
      id: attachment.id,
      filename: attachment.filename,
      mimeType: attachment.mimeType,
      content: attachment.content,
      thumbnail: attachment.thumbnail !== undefined ? attachment.thumbnail : null,
      url: `/api/roadmap/image?id=${attachment.id}&mt=${attachment.mimeType}`,
    }));
  const status = issue.fields.status.name;

  return {
    id: parseInt(issue.id, 10),
    key: issue.key,
    roadmapPhase,
    product,
    description,
    title,
    attachments,
    status,
    changelogLink: issue.fields.customfield_21960,
  } as IRoadmapItem;
}
