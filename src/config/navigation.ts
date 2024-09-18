import { Navigation } from "@toolpad/core/AppProvider";

export const NAVIGATION: Navigation = [
  {
    kind: "page",
    title: "Products",
    segment: "products",
    icon: "🍖",
    children: [
      {
        segment: "chicken",
        title: "Chicken",
        icon: "🐔",
      },
      {
        segment: "eggs",
        title: "Eggs",
        icon: "🥚",
      },
      {
        kind: "page",
        segment: "beef",
        title: "Beef",
        icon: "🥩",
      },
      {
        title: "Mutton",
        segment: "mutton",
        icon: "🐑",
      },
      {
        title: "Pork",
        segment: "pork",
        icon: "🐖",
      },
      {
        title: "Fish",
        segment: "fish",
        icon: "🐟",
      },
    ],
  },
  {
    kind: "divider",
  },
];
