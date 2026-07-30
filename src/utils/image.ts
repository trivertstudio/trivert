export const withAssetBuster = (url: string) => {
  // Append a simple cache-buster based on current timestamp to force reloads
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}v=${Date.now()}`;
};

export default withAssetBuster;
