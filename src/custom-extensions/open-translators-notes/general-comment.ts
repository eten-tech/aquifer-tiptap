import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesGeneralComment",

  group: "block",

  content: "block+",

  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (element) => {
          if (
            element.getAttribute("data-bnType") ===
            "OpenTranslatorsNotesGeneralComment"
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
        "data-bnType": "OpenTranslatorsNotesGeneralComment",
        ...HTMLAttributes,
      },
      0,
    ];
  },
});
