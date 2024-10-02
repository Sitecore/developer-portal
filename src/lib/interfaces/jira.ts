import { Option } from '@/src/components/ui/dropdown';

export interface StatusCategory {
  self: string;
  id: number;
  key: string;
  colorName: string;
  name: string;
}

export interface Status {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  statusCategory: StatusCategory;
}

export interface CustomField {
  self: string;
  value: string;
  id: string;
}

export interface Fields {
  summary: string;
  customfield_15180: CustomField; // Roadmap Phase
  customfield_15258?: CustomField[]; // Product
  customfield_15555?: string; // Speaker notes
  status: Status;
}

export interface Issue {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: Fields;
}

export interface Names {
  summary: string;
  customfield_15180: string;
  customfield_15258: string; // Product
  status: string;
}

export interface JiraResponse {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: Issue[];
  names: Names;
}

export interface RoadmapInformation {
  items: Issue[];
  products: Option[];
}
