import { Italic } from "@tiptap/extension-italic";

export default Italic.extend({
  parseHTML() {
    return [
      ...(this.parent?.() ?? []),
      {
        tag: "span",
        getAttrs: (node) => (node as HTMLElement).className === "ital" && {},
      },
    ];
  },
});
