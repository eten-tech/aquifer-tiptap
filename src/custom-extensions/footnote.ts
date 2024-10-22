import { Node } from "@tiptap/core";

export default Node.create({
  name: "footnote",
  inline: true,
  group: "inline",
  content: "inline*",
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (node) => {
          const bnType = (node as HTMLElement).getAttribute("data-bnType");
          if (bnType === "footnote") {
            return {};
          }

          return false;
        },
      },
    ];
  },
  renderHTML() {
    return [
      "span",
      {
        "data-bnType": "footnote",
      },
      ["span", 0],
    ];
  },
});
