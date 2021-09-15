const getSectionId = (title: string) => `${title.toLowerCase().replace(/[^a-z0-9]/gi, '-')}`;

export default getSectionId;
