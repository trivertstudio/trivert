export const isUnsplashUrl = (url: string) => url.includes('images.unsplash.com');

export const withAssetBuster = (url: string) => {
  if (/youtube\.com|youtu\.be/.test(url)) {
    return url;
  }

  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}v=${Date.now()}`;
};

export const responsiveImageUrl = (url: string, width: number) => {
  try {
    const parsed = new URL(url);
    if (!isUnsplashUrl(url)) return url;

    const params = new URLSearchParams(parsed.search);
    params.set('auto', 'format');
    params.set('fit', 'crop');
    params.set('w', String(width));
    if (!params.has('q')) params.set('q', '70');
    return `${parsed.origin}${parsed.pathname}?${params.toString()}`;
  } catch {
    return url;
  }
};

export const responsiveImageSet = (url: string) => {
  if (!isUnsplashUrl(url)) return url;

  return [600, 900, 1200]
    .map((width) => `${responsiveImageUrl(url, width)} ${width}w`)
    .join(', ');
};

export default withAssetBuster;
