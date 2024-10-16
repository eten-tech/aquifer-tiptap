import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesTranslationOptions",

  group: "block",

  content: "block+",

  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (element) => {
          if (
            element.getAttribute("data-bnType") ===
            "OpenTranslatorsNotesTranslationOptions"
          ) {
            return {};
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
        ...HTMLAttributes,
      },
      0,
    ];
  },
});
