import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export interface ProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Product({
  name,
  description,
  price,
  image,
  quantity,
}: ProductProps) {
  const imageSize = 300;
  const isProductAvailable = quantity > 0;
  console.log(isProductAvailable);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        image={image}
        component={Image}
        alt={`${name} Image`}
        height={imageSize}
        width={imageSize}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="h6" sx={{ color: "red" }}>
          Rs. {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
