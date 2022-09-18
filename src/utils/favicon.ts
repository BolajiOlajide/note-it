export const getFaviconUrl = (url: string): string => {
  const faviconUrl = new URL(url).origin + '/favicon.ico';
  return faviconUrl;
}
