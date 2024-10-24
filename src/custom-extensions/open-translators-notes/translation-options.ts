import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesTranslationOptions",

  group: "block",

  content: "block+",

  addAttributes() {
    return {
      verse: {
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
            "OpenTranslatorsNotesTranslationOptions"
          ) {
            return {
              verse: element.getAttribute("data-verse"),
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
        "data-bnType": "OpenTranslatorsNotesTranslationOptions",
        "data-verse": HTMLAttributes.verse,
      },
      0,
    ];
  },
});
