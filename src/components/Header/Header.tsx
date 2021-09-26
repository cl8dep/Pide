import React from "react";
import { Toolbar, Grid } from "@mui/material";
import Image from "next/image";
import { css, cx } from "@emotion/css";

import { AppBarStyled, FakeToolbar, AppTitleStyled } from "./Header.styles";
import logo from "~/assets/images/logo.png";
import { useRouter } from "next/router";

function Header() {
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
                `}
                onClick={() => router.push("/")}
              >
                <div
                  className={css`
                    max-width: 40px;
                  `}
                >
                  <Image src={logo} alt="Logo" />
                </div>
                <AppTitleStyled>Pide</AppTitleStyled>
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
