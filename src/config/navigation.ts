import { Navigation } from "@toolpad/core/AppProvider";

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Products",
  },
  {
    segment: "products/chicken",
    title: "Chicken",
    icon: "🐔",
  },
  {
    segment: "products/eggs",
    title: "Eggs",
    icon: "🥚",
  },
  {
    kind: "page",
    segment: "products/beef",
    title: "Beef",
    icon: "🥩",
  },
  {
    title: "Mutton",
    segment: "products/mutton",
    icon: "🐑",
  },
  {
    title: "Pork",
    segment: "products/pork",
    icon: "🐖",
  },
  {
    title: "Fish",
    segment: "products/fish",
    icon: "🐟",
  },
  {
    kind: "divider",
  },
];
