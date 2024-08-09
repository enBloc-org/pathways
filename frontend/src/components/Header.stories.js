import Header from "./Header"
import { fn } from "@storybook/test"
import { BrowserRouter } from "react-router-dom"

export default {
  title: "Header",
  component: Header,
  args: {
    searchHandler: fn(),
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

export const DefaultHeader = {}
