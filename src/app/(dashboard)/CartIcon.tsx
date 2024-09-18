import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import * as React from "react";

interface CartIconProps {
  onClick: () => void;
}

export default function CartIcon({ onClick }: CartIconProps) {
  return (
    <IconButton onClick={onClick}>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </IconButton>
  );
}
