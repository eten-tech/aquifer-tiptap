export function parseQueryParams(queryString: string) {
  const params: Record<string, string> = {};
  const searchParams = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;

  if (!searchParams) return params;

  const pairs = searchParams.split("&");
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    if (key) {
      params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : "";
    }
  }

  return params;
}
