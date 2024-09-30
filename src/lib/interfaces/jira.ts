interface StatusCategory {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
}

interface Status {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  statusCategory: StatusCategory;
}

interface CustomField {
  self: string;
  value: string;
  id: string;
}

interface Fields {
  summary: string;
  customfield_15180: CustomField; // Roadmap Phase
  customfield_15258?: CustomField[]; // Product
  status: Status;
}

interface Issue {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: Fields;
}

interface Names {
  summary: string;
  customfield_15180: string;
  customfield_15258: string;
  status: string;
}

interface JiraResponse {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: Issue[];
  names: Names;
}

interface RoadmapInformation {
  done: JiraResponse;
  now: JiraResponse;
  next: JiraResponse;
  future: JiraResponse;
}
