import { Mark } from "@tiptap/core";

export default Mark.create({
  name: "implied",
  priority: 1001,
  keepOnSplit: false,
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (node) => {
          const bnType = (node as HTMLElement).getAttribute("data-bnType");
          if (bnType === "implied") {
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
        "data-bnType": "implied",
      },
      0,
    ];
  },
});
