import React from "react";
import { Button, Grid } from "@mui/material";
import { css, cx } from "@emotion/css";

import { Link, NextImage } from "~/components";

import whatsApp1 from "~/assets/images/whatsApp1.png";
import whatsApp2 from "~/assets/images/whatsApp2.png";

import {
  ButtonContainer,
  Section,
  Title,
  Subtitle,
  Description,
  ImageContainer1,
  ImageContainer2,
  ImagesContainer,
} from "./HeroSection.styles";

function HeroSection() {
  return (
    <Section id="hero">
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Title variant="h2">Tu negocio online</Title>
          <Subtitle variant="h3">Recibe pedidos directo en WhatsApp</Subtitle>
          <Description variant="h5">
            Venda online. Obtenga su tienda personalizada.
          </Description>
          <ButtonContainer>
            <Button
              component={Link}
              href="/businesses"
              variant="outlined"
              color="primary"
            >
              Ver negocios disponibles
            </Button>
          </ButtonContainer>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          className={css`
            display: flex;
          `}
        >
          <ImagesContainer>
            <ImageContainer1>
              <NextImage src={whatsApp1} />
            </ImageContainer1>
            <ImageContainer2>
              <NextImage src={whatsApp2} />
            </ImageContainer2>
          </ImagesContainer>
        </Grid>
      </Grid>
    </Section>
  );
}

export default HeroSection;
