import { Mark } from '@tiptap/core';

export let customExtensions = {
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
                    tag: 'span',
                    getAttrs: (node) => {
                        const bnType = (node as HTMLElement).getAttribute('data-bnType');
                        if (bnType === 'bibleReference') {
                            return {
                                verses: [
                                    {
                                        startVerse: (node as HTMLElement).getAttribute('data-startVerse'),
                                        endVerse: (node as HTMLElement).getAttribute('data-endVerse'),
                                    },
                                ],
                            };
                        }
    
                        return false;
                    },
                },
            ];
        },
        renderHTML({ HTMLAttributes }) {
            const startVerse = HTMLAttributes.verses[0].startVerse;
            const endVerse = HTMLAttributes.verses[0].endVerse;
    
            return [
                'span',
                {
                    // id: spanId,
                    'data-bnType': 'bibleReference',
                    'data-startVerse': startVerse,
                    'data-endVerse': endVerse,
                    style: 'color: green',
                },
                0,
            ];
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
                    tag: 'span',
                    getAttrs: (node) => {
                        const bnType = (node as HTMLElement).getAttribute('data-bnType');
                        if (bnType === 'resourceReference') {
                            return {
                                resourceId: (node as HTMLElement).getAttribute('data-resourceId'),
                                resourceType: (node as HTMLElement).getAttribute('data-resourceType'),
                            };
                        }
    
                        return false;
                    },
                },
            ];
        },
        renderHTML({ HTMLAttributes }) {
            return [
                'span',
                {
                    'data-bnType': 'resourceReference',
                    'data-resourceId': HTMLAttributes.resourceId,
                    'data-resourceType': HTMLAttributes.resourceType,
                    style: 'color: blue',
                },
                0,
            ];
        },
    }),
    commentsMark : Mark.create({
        name: 'comments',
        priority: 1001,
        keepOnSplit: false,
        excludes: '',
        addAttributes() {
            return {
                comments: {
                    default: [
                        {
                            threadId: null,
                        },
                    ],
                },
            };
        },
        parseHTML() {
            return [
                {
                    tag: 'span',
                    getAttrs: (node) => {
                        const bnType = (node as HTMLElement).getAttribute('data-bnType');
                        if (bnType === 'comments') {
                            return {
                                comments: {
                                    threadId: (node as HTMLElement).getAttribute('data-threadId'),
                                },
                            };
                        }
    
                        return false;
                    },
                },
            ];
        },
        renderHTML({ HTMLAttributes }) {
            return [
                'span',
                {
                    'data-bnType': 'comments',
                    'data-threadId': HTMLAttributes.comments.threadId,
                    class: 'bg-primary/20 rounded inline-comment-span',
                },
                0,
            ];
        },
    })
}