import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesParagraph",

  group: "block",

  content: "block+",

  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (element) => {
          if (
            element.getAttribute("data-bnType") ===
            "OpenTranslatorsNotesParagraph"
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
        "data-bnType": "OpenTranslatorsNotesParagraph",
        ...HTMLAttributes,
      },
      0,
    ];
  },
});
