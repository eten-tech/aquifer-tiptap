import { Mark } from "@tiptap/core";

export default Mark.create({
  name: "footnote",
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
