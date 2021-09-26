import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { Grid, styled } from "@mui/material";

import Business from "~/types/Business";
import HttpCode from "~/utils/HttpCode";
import { ApiService } from "~/api";
import BusinessCard from "~/components/BusinessCard";
import { SectionTitle } from "~/components";

type BusinessesPageProps = { businesses: Business[] };

const BusinessesContainer = styled("div")(({ theme }) => ({
  width: "80%",
  margin: "10px auto",

  [theme.breakpoints.down("md")]: {
    width: "97%",
  },
}));

function BusinessesPage({ businesses }: BusinessesPageProps) {
  return (
    <>
      <SectionTitle title="Negocios disponibles" />
      <BusinessesContainer>
        <Grid container spacing={4}>
          {businesses.map((business) => (
            <Grid item key={business.id} sm={3}>
              <BusinessCard business={business} />
            </Grid>
          ))}
        </Grid>
      </BusinessesContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await ApiService.getBusinesses();

    if (response.status === HttpCode.HTTP_SUCESSS) {
      return {
        props: {
          businesses: response.data,
        },
      };
    }

    return {
      props: {
        businesses: [],
        error: true,
      },
    };
  } catch (e) {
    return {
      props: {
        businesses: [],
        error: true,
      },
    };
  }
};

export default BusinessesPage;
