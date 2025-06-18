export const replaceOutgoingLinks = (htmlString: string) => {
  // Regular expression to match URLs starting with 'https://scdp.blob.core.windows.net/downloads/'
  const regex = /https:\/\/scdp\.blob\.core\.windows\.net\/downloads\/[^\s"]+/g;

  // Replace matched URLs with '/currently-disabled'
  return htmlString.replace(regex, '/downloads/disabled');
};
