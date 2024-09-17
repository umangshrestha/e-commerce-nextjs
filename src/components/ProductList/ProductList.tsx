import * as React from "react";
import { Box } from "@mui/material";
import Product from "../Product";

const products = [
  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXM1f7aFP4rKF-wJZ2juCb-7JcQCspEYUVwLK4JrpBdVtRB-ELAqpUCmkg6znfoG4fh8&usqp=CAU",
    quantity: 10,
    category: "chicken",
    tags: ["chicken", "boneless", "skinless"],
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image:
      "https://www.theoar.ca/wp-content/uploads/2014/07/Untitled-9-26-600x600.png",
    quantity: 25,
    category: "beef",
    tags: ["beef", "boneless", "lean"],
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2wKCel458hkIU55Y_imOm4tBlM-rjYnjkCYteAvq6nveqZrL93y-GUSeWEWbgxHCFJo&usqp=CAU",
    quantity: 15,
    category: "pork",
    tags: ["pork", "bone-in", "juicy"],
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image:
      "https://ux2cms.imgix.net/images/Smoked-Lamb-Shoulder-2.jpg?auto=compress,format&w=750",
    quantity: 8,
    category: "lamb",
    tags: ["lamb", "bone-in", "tender"],
  },
];

interface ProductListProps {
  category: string | null;
}

export default function ProductList({ category }: ProductListProps) {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  if (!filteredProducts || filteredProducts.length === 0) {
    return <Box sx={{ padding: 2 }}>No products available</Box>;
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      gap={2}
      sx={{ maxWidth: "100%", padding: 2 }}
    >
      {filteredProducts.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          quantity={product.quantity}
        />
      ))}
    </Box>
  );
}
