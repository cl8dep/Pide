import { styled, List, ListItem, ListItemText } from "@mui/material";

export const ListStyled = styled(List)(() => ({
  backgroundColor: "#ffffff",
  padding: 5,
}));

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
  borderRadius: 5,
  transition: theme.transitions.create("box-shadow"),
  margin: 2,

  "&:hover": {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
}));

export const ListItemTextStyled = styled(ListItemText)(() => ({
  "& .MuiListItemText-primary": {
    whiteSpace: "pre-wrap",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  "& .MuiListItemText-secondary": {
    whiteSpace: "pre-wrap",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.2,
  },
}));
