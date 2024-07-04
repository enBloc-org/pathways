import TextSearch from "./TextSearch"
import { fn, userEvent, within } from "@storybook/test"
import { expect } from "@storybook/test"

export default {
    title: "Text Search",
    component: TextSearch,
}

export const DefaultTextSearch = {
    args: {
        searchHandler: fn(),
    },
    argType:{},
    play: async ({ canvasElement, step, args }) => {
        const canvas = within(canvasElement)
        const input = canvas.getByRole("textbox")
        const submitButton = canvas.getByRole("button")
        await step("User can type", async () => {
            await userEvent.type(
                input,
                "Web Developer"
            )
            await expect(input.value).toBe(
                "Web Developer"
            )
        })
        await step(
            "Button submits the search parameters typed",
            async () => {
              await userEvent.click(submitButton)
              await expect(args.searchHandler).toHaveBeenCalled()
            }
        )
    },
}
