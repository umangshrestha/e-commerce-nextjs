import {  type SchemaTypeDefinition } from "sanity";


const Product: SchemaTypeDefinition = {
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => [
        Rule.required(),
        Rule.positive().precision(2.0),
      ],
    },
    {
      title: "Max quantity per order",
      name: "maxQuantity",
      type: "number",
    },
    {
      title: "Image",
      name: "imageUrl",
      type: "string",
    },
    {
      title: "Quantity",
      name: "quantity",
      type: "number",
    },
    {
      title: "Badge",
      name: "badgeText",
      type: "string",
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [
      
          { title: "Chicken", value: "chicken" },
          { title: "Beef", value: "beef" },
          { title: "Pork", value: "pork" },
          { title: "Mutton", value: "mutton" },
          { title: "Fish", value: "fish" },
          { title: "Eggs", value: "eggs" },
        ]
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
  initialValue: {
    maxQuantity: 10,
  },
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
};
