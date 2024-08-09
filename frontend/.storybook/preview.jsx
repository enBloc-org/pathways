/** @type { import('@storybook/react').Preview } */
import "../src/style/globals.css"

import { BrowserRouter } from "react-router-dom"

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

export default preview
