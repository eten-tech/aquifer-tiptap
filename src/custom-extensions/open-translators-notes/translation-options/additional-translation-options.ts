import { Node } from "@tiptap/core";

export default Node.create({
  name: "OpenTranslatorsNotesTranslationOptionsAdditionalTranslationOptions",

  group: "block",

  content: "block+",

  parseHTML() {
    return [
      {
        tag: "ul",
        context: "OpenTranslatorsNotesTranslationOptions/",
      },
    ];
  },

  renderHTML() {
    return ["ul", 0];
  },
});
