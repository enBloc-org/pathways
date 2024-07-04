import Dropdown from "./DropDown"
import { userEvent, within } from "@storybook/test"
import { expect } from "@storybook/jest"

const mockedRoutes = [
  {
    object: "Route",
    routeId: 1,
    name: "Agriculture, environmental and animal care",
    sequence: 0,
  },
  {
    object: "Route",
    routeId: 2,
    name: "Business and administration",
    sequence: 1,
  },
  {
    object: "Route",
    routeId: 14,
    name: "Care services",
    sequence: 2,
  },
  {
    object: "Route",
    routeId: 3,
    name: "Catering and hospitality",
    sequence: 3,
  },
  {
    object: "Route",
    routeId: 5,
    name: "Construction and the built environment",
    sequence: 4,
  },
]

export default {
  title: "Dropdown",
  component: Dropdown,
  args: mockedRoutes,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const dropdown = canvas.getByRole("combobox")
    await step("Default value is set in the component", async () => {
      await expect(dropdown.value).toBe("")
    })
    await step("First option is disabled", async () => {
      const firstOption = dropdown.querySelector('option[value=""]')
      await expect(firstOption).not.toBeNull()
      await expect(firstOption.disabled).toBe(true)
    })
    await step("User can select different options", async () => {
      await userEvent.selectOptions(dropdown, mockedRoutes[0].name)
      await expect(dropdown.value).toBe(mockedRoutes[0].routeId.toString())
    })
  },
}

export const SelectSector = {
  args: {
    routes: mockedRoutes,
  },
}
