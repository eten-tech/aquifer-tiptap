import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions",

  group: "block",

  content: "listItem+",

  parseHTML() {
    return [
      {
        tag: "ul",
        getAttrs: (node) => {
          const bnType = (node as HTMLElement).getAttribute("data-bnType");
          if (
            bnType ===
            "OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions"
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
      "ul",
      {
        "data-bnType":
          "OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions",
        ...HTMLAttributes,
      },
      0,
    ];
  },
});
