export const replaceOutgoingLinks = (htmlString: string) => {
  // Regular expression to match URLs starting with 'https://scdp.blob.core.windows.net/downloads/'
  const regex = /https:\/\/scdp\.blob\.core\.windows\.net\/downloads\/[^\s"]+/g;

  return htmlString.replace(regex, (match) => {
    const baseUrl = 'https://scdp.blob.core.windows.net/downloads/';
    const filePath = match.replace(baseUrl, '');
    return `http://localhost:3000/api/download?file=${filePath}`;
  });
};
