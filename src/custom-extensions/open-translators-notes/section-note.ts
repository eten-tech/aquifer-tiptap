import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesSection",

  group: "block",

  content: "block+",

  addAttributes() {
    return {
      startVerseId: {
        default: null,
      },
      endVerseId: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (element) => {
          if (
            element.getAttribute("data-bnType") ===
            "OpenTranslatorsNotesSection"
          ) {
            const startVerseId = element.getAttribute("data-startVerseId");
            const endVerseId = element.getAttribute("data-endVerseId");
            return {
              startVerseId: startVerseId ? parseInt(startVerseId) : null,
              endVerseId: endVerseId ? parseInt(endVerseId) : null,
            };
          }
          return false;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      {
        "data-bnType": "OpenTranslatorsNotesSection",
        "data-startVerseId": HTMLAttributes.startVerseId,
        "data-endVerseId": HTMLAttributes.endVerseId,
      },
      0,
    ];
  },
});
