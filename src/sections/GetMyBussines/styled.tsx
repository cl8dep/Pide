import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps, Typography } from "@mui/material";

export const StepsContainer = styled('div')(() => ({
  maxWidth: "80vw",
  margin: "0 auto"
}));

export const StepTitle = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: "bold",
}));

export const StepDescription = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 500,
  textAlign: "center",
  marginTop: 8,
}));

export const IconContainer = styled("div")(() => ({
  position: "relative",
  width: 96,
  height: 96,
}));

export const StepContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 10,
}));
