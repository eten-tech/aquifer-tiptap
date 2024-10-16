import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import Video from "./video.js";
import BibleReference from "./bible-reference.js";
import ResourceReference from "./resource-reference.js";
import Comments from "./comments.js";
import OpenTranslatorsNotesGeneralComment from "./open-translators-notes/general-comment.ts";
import OpenTranslatorsNotesParagraphNote from "./open-translators-notes/paragraph-note.ts";
import OpenTranslatorsNotesSectionNote from "./open-translators-notes/section-note.ts";
import OpenTranslatorsNotesTranslationOptions from "./open-translators-notes/translation-options.ts";
import OpenTranslatorsNotesTranslationOptionsDefaultOption from "./open-translators-notes/translation-options/default-translation-option.ts";
import OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions from "./open-translators-notes/translation-options/additional-translation-options.ts";
import Implied from "./implied.ts";
import extendNodeWithIndentOption from "./node-with-indentation.ts";

const ParagraphWithIndentation = extendNodeWithIndentOption(Paragraph);
const BulletListWithIndentation = extendNodeWithIndentOption(BulletList);
const OrderedListWithIndentation = extendNodeWithIndentOption(OrderedList);
const BlockquoteWithIndentation = extendNodeWithIndentOption(Blockquote);

export {
  Video,
  BibleReference,
  ResourceReference,
  Comments,
  ParagraphWithIndentation,
  BulletListWithIndentation,
  OrderedListWithIndentation,
  BlockquoteWithIndentation,
  OpenTranslatorsNotesGeneralComment,
  OpenTranslatorsNotesParagraphNote,
  OpenTranslatorsNotesSectionNote,
  OpenTranslatorsNotesTranslationOptions,
  OpenTranslatorsNotesTranslationOptionsDefaultOption,
  OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions,
  Implied,
};
