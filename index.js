import "@babel/polyfill";
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

const mockElement = {
    appendChild: () => {},
    style: {},
    getBoundingClientRect: () => ({}),
    setAttribute: () => {},
    insertBefore: () => {},
    querySelector: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    classList: { add: () => {} }
};

const mockDocument = {
    querySelector: () => {},
    createTextNode: () => { return { ...mockElement } },
    createElement: () => ({ ...mockElement, ownerDocument: { ...mockElement } }),
};

class MockClipboardEvent {
    constructor() {
    }
}

class MockDragEvent {
    constructor() {
    }
}

const mockDOMParser = {
    parseFromString: () => ({ body: {} }),
};

const mockWindow = {
    DOMParser: function() { return mockDOMParser; },
    addEventListener: () => {},
    removeEventListener: () => {},
    setTimeout: () => {},
};

global.DragEvent = MockDragEvent;
global.navigator = { userAgent: '' };
global.document = mockDocument;
global.ClipboardEvent = MockClipboardEvent;
global.innerHeight = 0;
global.window = mockWindow;

global.getWordCountFromListOfTiptaps = (list) => {
    const editor = new Editor({extensions})
    // try {
        const jsonList = JSON.parse(list)
        return jsonList.reduce((total, currentJson) => {
            if (currentJson.tiptap) {
                editor.commands.setContent(currentJson.tiptap)
                return total + editor.storage.characterCount.words()
            } else {
                return total
            }
        }, 0)
    // } catch (error) {
    //     console.error(error)
    //     return 0
    // }
}
