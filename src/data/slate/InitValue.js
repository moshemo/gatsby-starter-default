import { Value } from "slate"

export const initValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "This is text from data >> slate >> InitValue.js",
          },
        ],
      },
    ],
  },
})
