import { Typography } from "@mui/material";
import { styled } from "@mui/styles";

export const SectionTitleStyled = styled(Typography)(() => ({
    color: 'rgb(77, 77, 77);',
    fontWeight: 700,
    lineHeight: 1.2,
}));

export const SectionSubtitleStyled = styled(Typography)(({}) => ({
    fontWeight: 500,
    lineHeight: 1.2,
    marginTop: 7
}));
