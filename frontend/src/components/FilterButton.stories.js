import {fn} from '@storybook/test'
import FilterButton from "./FilterButton";

const mockedRoutes = [
    {
      "object": "Route",
      "routeId": 1,
      "name": "Agriculture, environmental and animal care",
      "sequence": 0
    },
    {
      "object": "Route",
      "routeId": 2,
      "name": "Business and administration",
      "sequence": 1
    },
    {
      "object": "Route",
      "routeId": 14,
      "name": "Care services",
      "sequence": 2
    },
    {
      "object": "Route",
      "routeId": 3,
      "name": "Catering and hospitality",
      "sequence": 3
    },
    {
      "object": "Route",
      "routeId": 5,
      "name": "Construction and the built environment",
      "sequence": 4
    },
    {
      "object": "Route",
      "routeId": 6,
      "name": "Creative and design",
      "sequence": 5
    },
    {
      "object": "Route",
      "routeId": 7,
      "name": "Digital",
      "sequence": 6
    },
    {
      "object": "Route",
      "routeId": 4,
      "name": "Education and early years",
      "sequence": 7
    },
    {
      "object": "Route",
      "routeId": 8,
      "name": "Engineering and manufacturing",
      "sequence": 8
    },
    {
      "object": "Route",
      "routeId": 9,
      "name": "Hair and beauty",
      "sequence": 9
    },
    {
      "object": "Route",
      "routeId": 10,
      "name": "Health and science",
      "sequence": 10
    },
    {
      "object": "Route",
      "routeId": 11,
      "name": "Legal, finance and accounting",
      "sequence": 11
    },
    {
      "object": "Route",
      "routeId": 12,
      "name": "Protective services",
      "sequence": 12
    },
    {
      "object": "Route",
      "routeId": 13,
      "name": "Sales, marketing and procurement",
      "sequence": 13
    },
    {
      "object": "Route",
      "routeId": 15,
      "name": "Transport and logistics",
      "sequence": 14
    }
  ]

export default {
    title: "FilterButton",
    component: FilterButton,
    args : {
        onApply : fn(()=>console.log("Applied Filters")),
        options: mockedRoutes
    }
};
export const DefaultFilterButton = {};
