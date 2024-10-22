import type { Extension, Mark, Node } from "@tiptap/core";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import CharacterCount from "@tiptap/extension-character-count";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Image from "@tiptap/extension-image";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";
import Bold from "@tiptap/extension-bold";
import Heading from "@tiptap/extension-heading";
import Italic from "@tiptap/extension-italic";
import CodeBlock from "@tiptap/extension-code-block";
import HardBreak from "@tiptap/extension-hard-break";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Code from "@tiptap/extension-code";
import Strike from "@tiptap/extension-strike";
import Highlight from "@tiptap/extension-highlight";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import {
  Video,
  BibleReference,
  ResourceReference,
  Comments,
  Implied,
  OpenTranslatorsNotesGeneralComment,
  OpenTranslatorsNotesParagraphNote,
  OpenTranslatorsNotesSectionNote,
  OpenTranslatorsNotesTranslationOptions,
  OpenTranslatorsNotesTranslationOptionsDefaultOption,
  OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions,
  BlockquoteWithIndentation,
  ParagraphWithIndentation,
  BulletListWithIndentation,
  OrderedListWithIndentation,
  Footnote,
} from "./custom-extensions";
import History from "@tiptap/extension-history";
import { generateHTML, generateJSON } from "@tiptap/html";

export { generateHTML, generateJSON } from "@tiptap/html";
export {
  getMarkAttributes,
  Editor,
  Extension,
  Node,
  Mark,
  type SingleCommands,
} from "@tiptap/core";
export { Bold } from "@tiptap/extension-bold";
export { CharacterCount } from "@tiptap/extension-character-count";
export { Code } from "@tiptap/extension-code";
export { CodeBlock } from "@tiptap/extension-code-block";
export { Document } from "@tiptap/extension-document";
export { HardBreak } from "@tiptap/extension-hard-break";
export { Heading } from "@tiptap/extension-heading";
export { Highlight } from "@tiptap/extension-highlight";
export { History } from "@tiptap/extension-history";
export { HorizontalRule } from "@tiptap/extension-horizontal-rule";
export { Image } from "@tiptap/extension-image";
export { Italic } from "@tiptap/extension-italic";
export { Link } from "@tiptap/extension-link";
export { ListItem } from "@tiptap/extension-list-item";
export { Strike } from "@tiptap/extension-strike";
export { Subscript } from "@tiptap/extension-subscript";
export { Superscript } from "@tiptap/extension-superscript";
export { Text } from "@tiptap/extension-text";
export { TextStyle } from "@tiptap/extension-text-style";
export { Underline } from "@tiptap/extension-underline";
export * from "./custom-extensions";

export const officialNodes = [
  Document,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  ListItem,
  Text,
  Image,
  Link,
];

export const officialMarks = [
  Bold,
  Code,
  Italic,
  Strike,
  Underline,
  Highlight,
  Subscript,
  Superscript,
  TextStyle,
];

export const editOnlyExtensions = [CharacterCount, History];

export const customExtensions = [
  BibleReference,
  ResourceReference,
  Comments,
  Implied,
  Footnote,
  Video,
  OpenTranslatorsNotesGeneralComment,
  OpenTranslatorsNotesParagraphNote,
  OpenTranslatorsNotesSectionNote,
  OpenTranslatorsNotesTranslationOptions,
  OpenTranslatorsNotesTranslationOptionsDefaultOption,
  OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions,
  BlockquoteWithIndentation,
  ParagraphWithIndentation,
  BulletListWithIndentation,
  OrderedListWithIndentation,
];

export function configureAndOverrideExtensions(
  baseExtensions: (Node | Mark | Extension)[],
  overrideExtensions: (Node | Mark | Extension)[],
) {
  const overrideMap = new Map(overrideExtensions.map((ext) => [ext.name, ext]));
  const filteredBase = baseExtensions
    .filter((ext) => !overrideMap.has(ext.name))
    .map((ext) => ext.configure({}));
  return [...filteredBase, ...overrideExtensions];
}

// TO BE USED BY .NET

const formatOnlyExtensions = [
  ...officialMarks.map((m) => m.configure({})),
  ...officialNodes.map((n) => n.configure({})),
  ...customExtensions.map((n) => n.configure({})),
];

export function parseHtmlAsJson(html: string): string {
  return JSON.stringify(generateJSON(html, formatOnlyExtensions));
}

export function parseJsonAsHtml(json: string, index = 0): string {
  return generateHTML(JSON.parse(json)[index].tiptap, formatOnlyExtensions);
}
