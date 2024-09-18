import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ProductType as ProductProps } from "./types";
import clsx from "clsx";

export default function Product({
  name,
  description,
  price,
  imageUrl,
  quantity,
  badgeText,
}: ProductProps) {
  const imageSize = 300;
  const isProductAvailable = quantity > 0;
  badgeText = isProductAvailable ? badgeText : "Out of Stock";
  return (
    <div
      className={clsx(
        "max-w-sm mx-auto rounded overflow-hidden shadow-lg relative",
        { "opacity-50 pointer-events-none": !isProductAvailable },
      )}
    >
      {badgeText && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {badgeText}
        </div>
      )}
      <CardMedia title={name}>
        <Image
          src={imageUrl}
          alt={name}
          className="h-48 w-full object-cover"
          width={imageSize}
          height={imageSize}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          {description}
        </Typography>
        <Typography variant="h6" className="text-red-500">
          Rs. {price}
        </Typography>
        <div className="flex-1" />
      </CardContent>
      <span className="flex-1 auto" />
      <CardActions>
        <Button size="small" disabled={!isProductAvailable}>
          Buy
        </Button>
        <Button size="small" disabled={!isProductAvailable}>
          Add to Cart
        </Button>
      </CardActions>
    </div>
  );
}
