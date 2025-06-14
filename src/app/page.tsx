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

const LandingPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

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
