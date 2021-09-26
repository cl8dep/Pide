import React from "react";
import { ListItem, ListItemAvatar, Avatar, IconButton } from "@mui/material";
import { AddShoppingCart as AddShoppingCartIcon } from "@mui/icons-material";

import { Product } from "~/types";
import { ListItemTextStyled, ListStyled, ListItemStyled } from "./styles";

interface ProductListProps {
  items: Product[];
}

function ProductList(props: ProductListProps) {
  const { items } = props;

  return (
    <ListStyled>
      {items.map((item) => (
        <ListItemStyled
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <AddShoppingCartIcon />
            </IconButton>
          }
          key={item.id}
        >
          <ListItemAvatar>
            <Avatar alt={item.name} src={item.image || undefined} />
          </ListItemAvatar>
          <ListItemTextStyled
            primary={item.name}
            secondary={item.description}
          />
        </ListItemStyled>
      ))}
    </ListStyled>
  );
}

export default ProductList;
