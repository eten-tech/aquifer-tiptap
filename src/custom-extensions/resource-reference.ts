import { Mark } from "@tiptap/core";
import { parseQueryParams } from "../utils/href-parser";

export default Mark.create({
  name: "resourceReference",
  priority: 1001,
  keepOnSplit: false,
  addAttributes() {
    return {
      resourceId: {
        default: null,
      },
      resourceType: {
        default: null,
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (node) => {
          const bnType = (node as HTMLElement).getAttribute("data-bnType");
          if (bnType === "resourceReference") {
            return {
              resourceId: (node as HTMLElement).getAttribute("data-resourceId"),
              resourceType: (node as HTMLElement).getAttribute(
                "data-resourceType",
              ),
            };
          }

          return false;
        },
      },
      {
        tag: "a",
        getAttrs: (node) => {
          let href = node.getAttribute("href");
          if (!href) return false;

          const params = parseQueryParams(href);

          if (params.item) {
            if (!params.type) {
              throw Error(`Missing item type for <a>: ${href}`);
            }
            return {
              resourceId: params.item,
              resourceType: params.type,
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
        "data-bnType": "resourceReference",
        "data-resourceId": HTMLAttributes.resourceId,
        "data-resourceType": HTMLAttributes.resourceType,
      },
      0,
    ];
  },
});
