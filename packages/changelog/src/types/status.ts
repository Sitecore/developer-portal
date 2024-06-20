export type Status = {
  id: string;
  name: string;
  identifier: string;
  description: string;
};

export type StatusResults = {
  total: string;
  results: Status[];
};

export const DefaultStatus: Status = {
  id: 'pNOVO2dhtESFOSwd4Va84w',
  name: 'Available',
  identifier: 'available',
  description: 'Now available for customers',
};

export function ParseStatus(data: StatusResults): Status[] {
  return data.results.map((x) => {
    return {
      name: x.name,
      id: x.id,
      identifier: x.identifier,
      description: x.description,
    };
  });
}
