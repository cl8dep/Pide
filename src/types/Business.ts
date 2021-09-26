import Product from "./Product";

type Business = {
  id: number;
  name: string;
  logo: string;
  description: string;
  slug: string;
  products?: Product[]
};

export default Business;
