import Box from "@mui/material/Box";
import * as React from "react";
import ProductList from "@/components/ProductList";

interface ProductProps {
  params: {
    category: string;
  };
  searchParams?: {
    [key: string]: string;
  };
}
export default function Product({
  params: { category },
  searchParams,
}: ProductProps) {
  console.log(searchParams);
  return (
    <Box>
      <ProductList category={category} />
    </Box>
  );
}
