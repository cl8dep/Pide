import React from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import {
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import { Business } from "~/types";
import { ShareManager } from "~/utils";
import { NextImage } from "~/components";
import { BusinessName, CardStyled } from "./styled";

type BusinessCardProps = {
  business: Business;
};

function BusinessCard(props: BusinessCardProps) {
  const { business } = props;
  const router = useRouter();

  const onShare = () => {
    ShareManager.shareBusiness(
      business.name,
      business.description,
      business.slug
    );
  };

  const goToBusiness = () => {
    router.push(`/business/${business.slug}`);
  };

  return (
    <CardStyled onClick={goToBusiness}>
      <CardMedia
        component={NextImage}
        height="150"
        image={business.logo}
        alt={business.logo}
        className={css`
          object-fit: contain;
        `}
      />
      <CardHeader
        title={<BusinessName>{business.name}</BusinessName>}
        action={
          <Tooltip title="Compartir">
            <IconButton onClick={onShare} aria-label="share">
              <ShareIcon />
            </IconButton>
          </Tooltip>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {business.description}
        </Typography>
      </CardContent>
    </CardStyled>
  );
}

export default BusinessCard;
