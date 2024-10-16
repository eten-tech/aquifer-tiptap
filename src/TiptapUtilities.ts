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

globalThis.parseHtmlAsJson = (html: string) => {
  try {
    return JSON.stringify(generateJSON(html, formatOnlyExtensions));
  } catch (error) {
    console.error(error);
    return "";
  }
};

globalThis.parseJsonAsHtml = (json: string) => {
  try {
    return generateHTML(JSON.parse(json)[0].tiptap, formatOnlyExtensions);
  } catch (error) {
    console.error(error);
    return "";
  }
};

globalThis.getHtmlWordCount = (sourceHTML: string) => {
  const plainText = sourceHTML.replace(/<[^>]*>/g, "");
  return plainText.split(/[\s\n\r\t\xa0]+/).filter(Boolean).length;
};
