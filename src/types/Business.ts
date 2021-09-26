import StrapiBase from "./strapi/StrapiComponent";
import StrapiMedia from "./strapi/StrapiMedia";

type Business = {
  Name: string;
  Logo: StrapiMedia;
  Description: string;
  Slug: string;
} & StrapiBase;

export default Business;
