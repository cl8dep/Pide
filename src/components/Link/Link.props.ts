type LinkProps = {
  href?: string;
  linkAs?: string | object;
  locale?: string;
  passHref?: boolean;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  to: string | object;
};

export default LinkProps;
