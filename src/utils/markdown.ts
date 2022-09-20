export const extractTitle = (content: string): string => {
  const title = content.match(/^# (.*)/m)?.[1];
  return title || '';
}
