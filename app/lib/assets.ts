const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function getPublicAssetUrl(path: string) {
  if (/^(?:https?:|data:|blob:)/.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicBasePath}${normalizedPath}`;
}
