import { Heading } from "@tiptap/extension-heading";

export default Heading.extend({
  parseHTML() {
    return [
      ...(this.parent?.() ?? []),
      {
        tag: "p",
        getAttrs: (node) => {
          switch ((node as HTMLElement).className) {
            case "h1":
              return { level: 1 };
            case "h2":
              return { level: 2 };
            case "h3":
              return { level: 3 };
          }

          return false;
        },
      },
    ];
  },
});
