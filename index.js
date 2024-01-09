import { Editor, Mark } from "@tiptap/core";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import './dom-mocks.js'

const extensions = [
    StarterKit,
    Image,
    Link,
    Underline,
    Highlight,
    Subscript,
    Superscript,
    TextStyle,
    CharacterCount,
    Mark.create({ name: 'bibleReference', renderHTML: () => ['span'] }),
    Mark.create({ name: 'resourceReference', renderHTML: () => ['span'] }),
];

globalThis.getWordCountFromListOfTiptaps = (list) => {
    const editor = new Editor({extensions})
    try {
        const jsonList = JSON.parse(list)
        return jsonList.reduce((total, currentJson) => {
            if (currentJson.tiptap) {
                editor.commands.setContent(currentJson.tiptap)
                return total + editor.storage.characterCount.words()
            } else {
                return total
            }
        }, 0)
    } catch (error) {
        console.error(error)
        return 0
    }
}
