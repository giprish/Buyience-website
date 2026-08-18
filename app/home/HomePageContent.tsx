import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import HomeHero from "./components/HomeHero";
import HomeLogos from "./components/HomeLogos";
import HomeCapabilities from "./components/HomeCapabilities";
import HomeStats from "./components/HomeStats";
import HomeModuleTabs from "./components/HomeModuleTabs";
import HomeMACH from "./components/HomeMACH";
import HomeAudiences from "./components/HomeAudiences";
import HomeFAQ from "./components/HomeFAQ";

export default function HomePageContent() {
  return (
    <MarketingLayout mainClassName="quote-engine-page home-landing home-page">
      <HomeHero />
      <HomeLogos />
      <HomeCapabilities purple />
      <HomeStats />
      <HomeModuleTabs />
      <HomeMACH />
      <HomeAudiences purple />
      <HomeFAQ purple />
    </MarketingLayout>
  );
}
