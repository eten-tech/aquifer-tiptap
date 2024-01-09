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

globalThis.DragEvent = MockDragEvent;
globalThis.navigator = { userAgent: '' };
globalThis.document = mockDocument;
globalThis.ClipboardEvent = MockClipboardEvent;
globalThis.innerHeight = 0;
globalThis.window = mockWindow;
