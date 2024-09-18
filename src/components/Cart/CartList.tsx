import * as React from "react";
import { Box } from "@mui/material";
import Product from "./CartItem";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { getAvailableProducts } from "./query";


export default async function CartList() {
  const filteredProducts = await getAvailableProducts();
  if (!filteredProducts || filteredProducts.length === 0) {
    return <Box sx={{ padding: 2 }}>No products available</Box>;
  }

  return (
    <Box
      justifyContent="space-around"
      sx={{ maxWidth: "100%", padding: 2 }}
    >
      <List>
      {filteredProducts.map((product, index) => (
        <ListItem>
        <Product key={index} {...product} />
        </ListItem>
      ))}
      </List>
      <Box sx={{ padding: 2 }}>Total: {filteredProducts.reduce((acc, product) => acc + product.price, 0)}</Box>
    </Box>
  );
}
