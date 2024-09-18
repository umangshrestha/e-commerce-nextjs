import * as React from "react";
import { Box } from "@mui/material";
import Product from "./Product";
import { getAvailableProducts } from "./query";

interface ProductListProps {
  category: string | null | undefined;
}

export default async function ProductList({ category }: ProductListProps) {
  const filteredProducts = await getAvailableProducts(category || null);
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
        <Product key={index} {...product} />
      ))}
    </Box>
  );
}
