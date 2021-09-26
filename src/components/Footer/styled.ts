import { Button, styled, Typography } from "@mui/material";

export const FooterStyled = styled("footer")(() => ({
  marginTop: "40px",
}));

export const Banner = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.main,
  padding: "30px 15%",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 700,
  lineHeight: 1.2,
}));

export const BannerSubtitle = styled(Typography)(({ theme }) => ({
  color: "white",
}));

export const ContainedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: theme.palette.primary.main,
  borderRadius: 50,
  width: 180,

  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.primary.main,
  }
}));
