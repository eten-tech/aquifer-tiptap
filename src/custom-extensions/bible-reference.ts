import { Mark } from "@tiptap/core";
import { parseBref } from "../utils/bref-parser";
import { parseQueryParams } from "../utils/href-parser";

export default Mark.create({
  name: "bibleReference",
  priority: 1001,
  keepOnSplit: false,
  addAttributes() {
    return {
      verses: {
        default: [
          {
            startVerse: null,
            endVerse: null,
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
          if (bnType === "bibleReference") {
            return {
              verses: (
                JSON.parse(
                  (node as HTMLElement).getAttribute("data-verses") ?? "[]",
                ) as [number, number][]
              ).map(([startVerse, endVerse]) => ({ startVerse, endVerse })),
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

          if (params.bref) {
            return {
              verses: parseBref(params.bref),
            };
          }

          return false;
        },
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    const verses = (
      HTMLAttributes.verses as {
        startVerse: number | string;
        endVerse: number | string;
      }[]
    ).map(({ startVerse, endVerse }) => [
      parseInt(startVerse.toString()),
      parseInt(endVerse.toString()),
    ]);

    return [
      "span",
      {
        "data-bnType": "bibleReference",
        "data-verses": JSON.stringify(verses),
      },
      0,
    ];
  },
});
