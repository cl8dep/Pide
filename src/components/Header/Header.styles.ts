import { styled, Typography } from "@mui/material";
import { AppBar } from "@mui/material";

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.paper} !important`,
}));

export const AppTitleStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: "2rem",
  marginLeft: 10,
  cursor: "pointer"
}));

export const FakeToolbar = styled("div")(({ theme }) => ({
  minHeight: 80,
}));
