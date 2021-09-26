import { Card, styled, Typography } from "@mui/material";

export const CardStyled = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create("box-shadow"),

  "&:hover": {
    boxShadow: theme.shadows[3],
    cursor: "pointer",
  },
}));

export const BusinessName = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  minHeight: 50,
  fontWeight: 500,
  color: theme.palette.primary.main,
}));
