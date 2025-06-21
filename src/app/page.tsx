"use client";

import Footer from "@/components/HomePageCompanent/Footer/Footer";
import LandingPageHome from "@/components/HomePageCompanent/Home/LandingPageHome";
import Section2 from "@/components/HomePageCompanent/Section2/Section2";
import Section3 from "@/components/HomePageCompanent/Section3/Section3";
import Section4 from "@/components/HomePageCompanent/Section4/Section4";
import Section5 from "@/components/HomePageCompanent/Section5/Section5";
import Section6 from "@/components/HomePageCompanent/Section6/Section6";
import Section7 from "@/components/HomePageCompanent/Section7/Section7";
import Section8 from "@/components/HomePageCompanent/Section8/Section8";
import NavBarLandingPage from "@/components/NavBarLandingPage/NavBarLandingPage";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsReady(true);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  if (!isReady) return <Loading />;

  return (
    <div className="w-full h-max flex flex-col relative">
      <NavBarLandingPage />
      <LandingPageHome />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
};

export default LandingPage;
