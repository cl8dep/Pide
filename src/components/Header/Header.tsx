import React from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import { Toolbar, Grid } from "@mui/material";

import { useAppSelector } from "~/redux";
import { NextImage } from "~/components";

import { AppBarStyled, FakeToolbar, AppTitleStyled } from "./Header.styles";

function Header() {
  const header = useAppSelector((state) => state.layout.header);

  const router = useRouter();

  return (
    <>
      <AppBarStyled>
        <Toolbar>
          <Grid container>
            <Grid item>
              <div
                className={css`
                  display: flex;
                  align-items: center;
                `}
                onClick={() => router.push("/")}
              >
                <NextImage
                  rounded
                  src={header ? header.image : "/images/logo.png"}
                  alt="Logo"
                  width="60"
                  height="60"
                />
                <AppTitleStyled>
                  {header ? header.title : "Pide"}
                </AppTitleStyled>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBarStyled>
      <FakeToolbar />
    </>
  );
}

export default Header;
