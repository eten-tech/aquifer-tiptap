import { Editor, Mark } from "@tiptap/core";
import { generateJSON, generateHTML } from "@tiptap/html";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import CharacterCount from "@tiptap/extension-character-count";
import './dom-mocks.js'
import { customExtensions } from './customExtensions';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Image from '@tiptap/extension-image';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Link from '@tiptap/extension-link';
import Bold from '@tiptap/extension-bold';
import Heading from "@tiptap/extension-heading";
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';

const extensions = [
    TextStyle,
    Image,
    Underline,
    CharacterCount,
    Document,
    Text,
    Paragraph,
    Heading,
    Link,
    BulletList,
    ListItem,
    OrderedList,
    Bold,
    Italic,
    customExtensions.bnBibleResourceReference,
    customExtensions.bnResourceReference,
    customExtensions.commentsMark,
];

globalThis.getWordCountFromListOfTiptaps = (list) => {
    const editor = new Editor({extensions})
        const jsonList = JSON.parse(list)
        return jsonList.reduce((total, currentJson) => {
            if (currentJson.tiptap) {
                editor.commands.setContent(currentJson.tiptap)
                return total + editor.storage.characterCount.words()
            } else {
                return total
            }
        }, 0)
}

globalThis.parseHtmlAsJson = (html) => {
    try {
        return JSON.stringify(generateJSON(html, extensions));
    } catch (error) {
         console.error(error)
         return 0
    }
}

globalThis.parseJsonAsHtml = (json) => {
    try {
        return generateHTML(JSON.parse(json)[0].tiptap, extensions);
    } catch (error) {
          console.error(error)
          return 0
    }
}

globalThis.getWordCount = (html) => {
    const editor = new Editor({extensions});
    editor.commands.setContent(generateJSON(html, extensions));
    return editor.storage.characterCount.words();
}