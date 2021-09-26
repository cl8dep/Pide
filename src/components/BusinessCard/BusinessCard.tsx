import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Business from "~/types/Business";
import { ShareManager, StrapiMedia } from "~/utils";

type BusinessCardProps = {
  business: Business;
};

function BusinessCard(props: BusinessCardProps) {
  const { business } = props;

  const onShare = () => {
    ShareManager.shareBusiness(
      business.Name,
      business.Description,
      business.Slug
    );
  };

  return (
    <Card>
      <CardHeader
        title={business.Name}
        action={
          <Tooltip title="Compartir">
            <IconButton onClick={onShare} aria-label="share">
              <ShareIcon />
            </IconButton>
          </Tooltip>
        }
      />
      <CardMedia
        component="img"
        height="150"
        image={StrapiMedia.getFullUrl(business.Logo.url)}
        alt={business.Logo.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {business.Description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BusinessCard;
