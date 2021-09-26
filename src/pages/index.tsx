import type { NextPage } from "next";
import React from "react";
import GetMyBusinessSection from "~/sections/GetMyBussines";
import HeroSection from "~/sections/Hero";
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
