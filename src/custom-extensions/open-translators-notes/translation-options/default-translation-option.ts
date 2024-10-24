import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesTranslationOptionsDefaultOption",

  group: "block",

  content: "inline*",

  parseHTML() {
    return [
      {
        tag: "p",
        priority: 51,
        getAttrs: (node) => {
          const bnType = (node as HTMLElement).getAttribute("data-bnType");
          if (
            bnType === "OpenTranslatorsNotesTranslationOptionsDefaultOption"
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
      "p",
      {
        "data-bnType": "OpenTranslatorsNotesTranslationOptionsDefaultOption",
        ...HTMLAttributes,
      },
      0,
    ];
  },
});
