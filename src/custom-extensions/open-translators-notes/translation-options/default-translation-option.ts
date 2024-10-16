import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesTranslationOptionsDefaultOption",

  group: "block",

  parseHTML() {
    return [
      {
        tag: "p",
        context: "OpenTranslatorsNotesTranslationOptions/",
      },
    ];
  },

  renderHTML() {
    return ["p", 0];
  },
});
