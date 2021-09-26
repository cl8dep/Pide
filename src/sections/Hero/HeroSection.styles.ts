import { styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  marginTop: 20,
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const Section = styled("section")(({ theme }) => ({
  padding: "50px 70px",
  [theme.breakpoints.down("md")]: {
    padding: "50px 3px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: "rgb(77, 77, 77)",
  fontWeight: 700,
  fontSize: "3rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.9rem",
    textAlign: "center",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2.7rem",
  color: "rgb(77, 77, 77)",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.7rem",
    textAlign: "center",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
    textAlign: "center",
    marginTop: 15,
  },
}));

export const ImagesContainer = styled("div")(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("md")]: {
    margin: "30px auto 0 auto",
    width: 270,
  },
}));

export const ImageContainer1 = styled("div")(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box",
  zIndex: 2,
  height: "410px",
  width: "247px",
  left: 0,
  top: 0,

  [theme.breakpoints.down("md")]: {
    height: "350px",
    width: "187px",
  },
}));

export const ImageContainer2 = styled("div")(({ theme }) => ({
  position: "absolute",
  boxSizing: "border-box",
  zIndex: 3,
  height: "410px",
  width: "247px",
  left: "146px",
  top: "10px",

  [theme.breakpoints.down("md")]: {
    height: "350px",
    width: "187px",
    left: "86px",
  },
}));
