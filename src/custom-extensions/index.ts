import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import Video from "./video.js";
import BibleReference from "./bible-reference.js";
import ResourceReference from "./resource-reference.js";
import Comments from "./comments.js";
import OpenTranslatorsNotesGeneralComment from "./open-translators-notes/general-comment";
import OpenTranslatorsNotesParagraphNote from "./open-translators-notes/paragraph-note";
import OpenTranslatorsNotesSectionNote from "./open-translators-notes/section-note";
import OpenTranslatorsNotesTranslationOptions from "./open-translators-notes/translation-options";
import OpenTranslatorsNotesTranslationOptionsDefaultOption from "./open-translators-notes/translation-options/default-translation-option";
import OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions from "./open-translators-notes/translation-options/additional-translation-options";
import Implied from "./implied";
import Footnote from "./footnote";
import extendNodeWithIndentOption from "./node-with-indentation";

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
  Footnote,
};
