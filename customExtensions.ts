import { Heading } from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import { Mark } from '@tiptap/core';
import Paragraph from '@tiptap/extension-paragraph';
import { parseVerse } from './verseParser';

export let customExtensions = {
    heading: Heading.extend({
        priority: 1001,
        parseHTML() {
            return [
                {
                    tag: 'h1',
                    attrs: { level: 1 },
                },
                {
                    tag: 'h2',
                    attrs: { level: 2 },
                },
                {
                    tag: 'h3',
                    attrs: { level: 3 },
                },
                {
                    tag: 'p',
                    getAttrs: (node) => {
                        switch ((node as HTMLElement).className) {
                            case 'h1':
                            case 'intro-h1':
                                return { level: 1 };
                            case 'h2':
                            case 'intro-h2':
                                return { level: 2 };
                            case 'h3':
                            case 'intro-h3':
                                return { level: 3 };
                        }

                        return false;
                    },
                },
                {
                    tag: 'p',
                    getAttrs: (node) => (node as HTMLElement).className === 'h2' && { level: 2 },
                },
            ];
        },
    }),
    italic: Italic.extend({
        parseHTML() {
            return [
                {
                    tag: 'em',
                },
                {
                    tag: 'i',
                    getAttrs: (node) => (node as HTMLElement).style.fontStyle !== 'normal' && null,
                },
                {
                    style: 'font-style=italic',
                },
                {
                    tag: 'span',
                    getAttrs: (node) => (node as HTMLElement).className === 'ital' && null,
                },
            ];
        },
    }),
    paragraph: Paragraph.extend({
        addAttributes() {
            return {
                class: {
                    parseHTML: (e) => e.getAttribute('class'),
                },
            };
        },
    }),
    bnBibleResourceReference: Mark.create({
        name: 'bibleReference',
        priority: 1001,
        keepOnSplit: false,
        addAttributes() {
            return {
                verses: {
                    default: [
                        {
                            startVerse: null,
                            endVerse: null,
                        },
                    ],
                },
            };
        },
        parseHTML() {
            return [
                {
                    tag: 'a',
                    getAttrs: (node) => {
                        let href = (node as HTMLElement).getAttribute('href');
                        if (href === null) return false;

                        if (href.indexOf('?bref=') !== -1) {
                            return {
                                verses: parseVerse(href?.split('=')[1]),
                            };
                        }

                        return false;
                    },
                },
            ];
        },
        renderHTML({ HTMLAttributes }) {
            return ['span', { style: { color: 'green' } }, 0];
        },
    }),
    bnResourceReference: Mark.create({
        name: 'resourceReference',
        priority: 1001,
        keepOnSplit: false,
        addAttributes() {
            return {
                resourceId: {
                    default: null,
                },
                resourceType: {
                    default: null,
                },
            };
        },
        parseHTML() {
            return [
                {
                    tag: 'a',
                    getAttrs: (node) => {
                        let href = (node as HTMLElement).getAttribute('href');
                        if (href === null) return false;

                        if (href.indexOf('?item=') !== -1) {
                            return {
                                resourceType: 'tyndaleBibleDictionary',
                                resourceId: `${href?.split('=')[1]}-1.6`,
                            };
                        }

                        return false;
                    },
                },
                {
                    tag: 'span',
                    getAttrs: (node) => {
                        let span = (node as HTMLElement);
                        let resourceType = span.getAttribute('data-resourceType');
                        let resourceId = span.getAttribute('data-resourceid')

                        return {
                            resourceType,
                            resourceId
                        }
                    }
                },
            ];
        },
        renderHTML({ HTMLAttributes }) {
            return ['span', { style: { color: 'blue' } }, 0];
        },
    }),
};
