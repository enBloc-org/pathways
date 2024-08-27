import Header from "./Header"
import { fn } from "@storybook/test"

export default {
  title: "Header",
  component: Header,
  args: {
    searchHandler: fn(),
  },
}

export const DefaultHeader = {}
