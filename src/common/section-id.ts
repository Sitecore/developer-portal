const getSectionId = (title: string) =>
  `heading-${title.toLowerCase().replace(/[^a-z0-9]/gi, '-')}`;

export default getSectionId;
