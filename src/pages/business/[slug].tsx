import { Container } from "@mui/material";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from "react";
import { useEffect } from "react";
import { ApiService } from "~/api";
import { ProductList } from "~/components";
import { LayoutActions, useAppDispatch } from "~/redux";

function BusinessPage({
  business,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      LayoutActions.setHeader({
        title: business.name,
        image: business.logo,
        subtitle: "",
      })
    );

    return () => {
      LayoutActions.setHeader();
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <ProductList items={products.items || []} />
    </Container>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.query;
  const business = await ApiService.getBusiness(slug as string);
  const products = await ApiService.getProductsByBusiness(slug as string);
  return {
    props: {
      business: business.data,
      products: products.data,
    },
  };
};

export default BusinessPage;
