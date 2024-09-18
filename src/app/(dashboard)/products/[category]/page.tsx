import Box from "@mui/material/Box";
import * as React from "react";
import { getAvailableProducts } from "@/components/ProductItem/query";
import Product from "@/components/ProductItem";

interface ProductProps {
  params: {
    category: string;
  };
  searchParams?: {
    [key: string]: string;
  };
}
export default async function ProductPage({
  params: { category },
  searchParams,
}: ProductProps) {
  const filteredProducts = await getAvailableProducts(category || null);
  if (!filteredProducts || filteredProducts.length === 0) {
    return <Box sx={{ padding: 2 }}>No products available</Box>;
  }

  console.log(searchParams);
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
