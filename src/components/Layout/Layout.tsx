import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Layout(props: {
  children: any;
  showFooter?: boolean;
}) {
  const { children, showFooter } = props;

  return (
    <>
      <CssBaseline />
      <Header/>
      {children}
      {showFooter && <Footer />}
    </>
  );
}

export default Layout;
