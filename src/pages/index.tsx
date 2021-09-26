import React from "react";
import type { NextPage } from "next";

import {
  GetMyBusiness as GetMyBusinessSection,
  Hero as HeroSection,
} from "~/sections";
import { EmptySpace } from "~/components";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <EmptySpace />
      <GetMyBusinessSection />
    </div>
  );
};

export default Home;
