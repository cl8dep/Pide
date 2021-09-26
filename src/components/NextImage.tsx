import React from "react";
import { css } from "@emotion/css";
import { Avatar } from "@mui/material";
import Image, { ImageProps } from "next/image";

interface NextImageProps extends ImageProps {
  rounded?: boolean;
}

function NextImage(props: NextImageProps) {
  const { rounded, ...rest } = props;

  if (rounded)
    return (
      <Avatar
        className={css`
          background-color: transparent;
        `}
      >
        <Image {...rest} />
      </Avatar>
    );
  else return <Image {...rest} />;
}

export default NextImage;
