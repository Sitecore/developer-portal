export type Media = {
  id: string;
  name: string;
  fileName: string;
  fileUrl: string;
  description: string;
  fileWidth: number;
  fileHeight: number;
  fileId: string;
  fileSize: string;
  fileType: string;
};

export type MediaResults = {
  total: string;
  results: Media[];
};
