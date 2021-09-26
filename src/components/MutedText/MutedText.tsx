import { Typography, styled } from "@mui/material";

const TypographyStyled = styled(Typography)(() => ({
  marginTop: 20,
  color: "rgb(77, 77, 77)",
  fontSize: 12,
  fontWeight: 500,
  textAlign: "center",
  lineHeight: 1.2,
}));

type MutedTextProps = {
  children: string;
};

function MutedText(props: MutedTextProps) {
  const { children } = props;
  return <TypographyStyled>{children}</TypographyStyled>;
}

export default MutedText;
