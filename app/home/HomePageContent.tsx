import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "./components/HomeHero";
import HomeLogos from "./components/HomeLogos";
import HomeCapabilities from "./components/HomeCapabilities";
import HomeStats from "./components/HomeStats";
import HomeModuleTabs from "./components/HomeModuleTabs";
import HomeMACH from "./components/HomeMACH";
import HomeAudiences from "./components/HomeAudiences";
import HomeFAQ from "./components/HomeFAQ";
import HomeFinalCTA from "./components/HomeFinalCTA";

export default function HomePageContent() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="quote-engine-page home-landing home-page flex-grow">
        <HomeHero />
        <HomeLogos />
        <HomeCapabilities purple />
        <HomeStats />
        <HomeModuleTabs />
        <HomeMACH purple />
        <HomeAudiences />
        <HomeFAQ purple />
        <HomeFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
