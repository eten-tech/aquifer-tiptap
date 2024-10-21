import {
  customExtensions,
  generateHTML,
  generateJSON,
  officialMarks,
  officialNodes,
} from ".";

const formatOnlyExtensions = [
  ...officialMarks.map((m) => m.configure({})),
  ...officialNodes.map((n) => n.configure({})),
  ...customExtensions.map((n) => n.configure({})),
];

export function parseHtmlAsJson(html: string): string {
  try {
    return JSON.stringify(generateJSON(html, formatOnlyExtensions));
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function parseJsonAsHtml(json: string, index = 0): string {
  try {
    return generateHTML(JSON.parse(json)[index].tiptap, formatOnlyExtensions);
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function getHtmlWordCount(sourceHTML: string): number {
  const plainText = sourceHTML.replace(/<[^>]*>/g, "");
  return plainText.split(/[\s\n\r\t\xa0]+/).filter(Boolean).length;
}

globalThis.parseHtmlAsJson = parseHtmlAsJson;
globalThis.parseJsonAsHtml = parseJsonAsHtml;
globalThis.getHtmlWordCount = getHtmlWordCount;
