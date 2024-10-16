import type { Node } from "@tiptap/core";

export default function extendNodeWithIndentOption(nodeType: Node) {
  return nodeType.extend({
    addAttributes() {
      return {
        indent: {
          default: undefined,
          parseHTML: (element) =>
            element.getAttribute("data-indent") === null
              ? undefined
              : parseInt(element.getAttribute("data-indent")!),
          renderHTML: (attributes) => {
            return {
              "data-indent": attributes.indent,
            };
          },
        },
      };
    },
  });
}
