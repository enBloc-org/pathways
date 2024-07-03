import Dropdown from "./Dropdown"

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
}

export const SelectSector = {
    args: {
        routes: mockedRoutes,
    },
}
