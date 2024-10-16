import { Mark } from "@tiptap/core";

export default Mark.create({
  name: "comments",
  priority: 1001,
  keepOnSplit: false,
  excludes: "",
  addAttributes() {
    return {
      comments: {
        default: [
          {
            threadId: null,
          },
        ],
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (node) => {
          const bnType = (node as HTMLElement).getAttribute("data-bnType");
          if (bnType === "comments") {
            return {
              comments: {
                threadId: (node as HTMLElement).getAttribute("data-threadId"),
              },
            };
          }

          return false;
        },
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      {
        "data-bnType": "comments",
        "data-threadId": HTMLAttributes.comments.threadId,
      },
      0,
    ];
  },
});
