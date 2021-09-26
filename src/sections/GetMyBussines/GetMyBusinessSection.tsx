import Image from "next/image";
import { Grid } from "@mui/material";
import React from "react";
import { MutedText, SectionTitle } from "~/components";
import {
  StepTitle,
  IconContainer,
  StepContainer,
  StepDescription,
  StepsContainer,
} from "./styled";
import StoreIcon from "~/assets/icons/store.svg";
import ProductIcon from "~/assets/icons/product.svg";
import ClientIcon from "~/assets/icons/client.svg";

function GetMyBusinessSection() {
  return (
    <section>
      <SectionTitle
        title="¿Como registro mi negocio?"
        subtitle="Su negocio en internet en 3 pasos"
      />

      <StepsContainer>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <StepContainer>
              <IconContainer>
                <Image src={StoreIcon} layout="fill" />
              </IconContainer>
              <StepTitle>Cree su tienda gratis</StepTitle>
              <StepDescription>
                Evite crear una complicada pagina web, solo regístrese y en
                minutos tendrá su negocio online.
              </StepDescription>
            </StepContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StepContainer>
              <IconContainer>
                <Image src={ProductIcon} layout="fill" />
              </IconContainer>
              <StepTitle>Agregue su primer producto</StepTitle>
              <StepDescription>
                Agregue productos desde su tablero facilmente, gestione su
                disponibilidad, cambie precios y fotos.
              </StepDescription>
            </StepContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StepContainer>
              <IconContainer>
                <Image src={ClientIcon} layout="fill" />
              </IconContainer>
              <StepTitle>Agregue su primer producto</StepTitle>
              <StepDescription>
                Comparta con clientes y reciba pedidos via Whatsapp, ellos se
                atienden solos y usted tiene más tiempo.
              </StepDescription>
            </StepContainer>
          </Grid>
        </Grid>
      </StepsContainer>

      <MutedText>
        Reciba pedidos en WhatsApp | Súper rápido en Web y Móvil | ¡Sin
        comisiones nunca!
      </MutedText>
    </section>
  );
}

type BussinesRegistrationStepProps = {
  title: string;
};

function BussinesRegistrationStep(props: BussinesRegistrationStepProps) {
  return <div></div>;
}

export default GetMyBusinessSection;
