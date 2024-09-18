import { type SchemaTypeDefinition } from "sanity";

const Product = {
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
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
      title: "Category",
      name: "category",
      type: "string",
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
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
};
