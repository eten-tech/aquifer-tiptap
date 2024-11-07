import { parseHtmlAsJson, parseJsonAsHtml } from ".";

// eslint-disable-next-line
(globalThis as any).parseHtmlAsJson = parseHtmlAsJson;

// eslint-disable-next-line
(globalThis as any).parseJsonAsHtml = parseJsonAsHtml;
