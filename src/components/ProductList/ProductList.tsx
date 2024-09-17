import * as React from 'react';
import { Box } from '@mui/material'; 
import Product from '../Product';

const products = [
  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },  {
    name: "Chicken Breast",
    description: "Fresh, skinless chicken breast fillets.",
    price: 12.99,
    image: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    name: "Ground Beef",
    description: "Lean ground beef for burgers or tacos.",
    price: 8.99,
    image: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    name: "Pork Chops",
    description: "Thick, juicy pork chops.",
    price: 14.50,
    image: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    name: "Lamb Shoulder",
    description: "Tender lamb shoulder, great for slow cooking.",
    price: 20.99,
    image: "https://via.placeholder.com/150",
    quantity: 8
  },
];

export default function ProductList() {
  if (!products || products.length === 0) {
    return <Box sx={{ padding: 2 }}>No products available</Box>;
  }

  return (
    <Box 
      display="flex" 
      flexWrap="wrap" 
      justifyContent="space-around" 
      gap={2}
      sx={{ maxWidth: '100%', padding: 2 }}
    >
      {products.map((product, index) => (
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