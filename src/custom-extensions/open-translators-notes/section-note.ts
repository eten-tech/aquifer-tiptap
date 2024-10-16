import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesSection",

  group: "block",

  content: "block+",

  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (element) => {
          if (
            element.getAttribute("data-bnType") ===
            "OpenTranslatorsNotesSection"
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
        "data-bnType": "OpenTranslatorsNotesSection",
        ...HTMLAttributes,
      },
      0,
    ];
  },
});
