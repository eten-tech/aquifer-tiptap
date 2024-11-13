/**
 * Parses a query string into an object of key-value pairs. Similar to URLSearchParams.
 * @param queryString - URL query string with or without leading question mark
 * @returns Object containing parsed query parameters as key-value pairs
 */
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
