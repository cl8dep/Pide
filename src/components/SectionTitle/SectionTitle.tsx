import { SectionTitleStyled, SectionSubtitleStyled } from "./styled";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

function SectionTitle(props: SectionTitleProps) {
  const { title, subtitle } = props;
  return (
    <>
      <SectionTitleStyled variant="h4" align="center">
        {title}
      </SectionTitleStyled>
      <SectionSubtitleStyled variant="subtitle1" align="center">
        {subtitle}
      </SectionSubtitleStyled>
    </>
  );
}

export default SectionTitle;
