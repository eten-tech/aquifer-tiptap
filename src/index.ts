import { Editor } from "@tiptap/core";
import { generateJSON, generateHTML } from "@tiptap/html";
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
} from "./custom-extensions";

const nodes = [
  Document,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  ListItem,
  Text,
  Image,
  Video,
  Link,
];

const marks = [
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

const officialExtensions = [CharacterCount];

const customExtensions = [
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
];

const allExtensions = [
  ...marks.map((m) => m.configure({})),
  ...nodes.map((n) => n.configure({})),
  ...officialExtensions.map((n) => n.configure({})),
  ...customExtensions.map((n) => n.configure({})),
];

export function parseHtmlAsJson(html: string) {
  try {
    return JSON.stringify(generateJSON(html, allExtensions));
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function parseJsonAsHtml(json: string): string {
  try {
    return generateHTML(JSON.parse(json)[0].tiptap, allExtensions);
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function getHtmlWordCount(sourceHTML: string): number {
  const plainText = sourceHTML.replace(/<[^>]*>/g, "");
  return plainText.split(/[\s\n\r\t\xa0]+/).filter(Boolean).length;
}
