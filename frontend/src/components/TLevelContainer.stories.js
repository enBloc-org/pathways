import TLevelContainer from "./TLevelContainer"

export default {
  title: "T Level Card Container",
  component: TLevelContainer,
  args: {
    products: [
      {
        typeName: "TLevel",
        name: "Junior Software Developer",
        KeyboardEvent: 1,
      },
      {
        typeName: "TLevel",
        name: "QA Analyst",
        KeyboardEvent: 2,
      },
      {
        typeName: "TLevel",
        name: "Another Junior Role",
        KeyboardEvent: 3,
      },
    ],
  },
}

export const DefaultTLevelCardContainer = {}
