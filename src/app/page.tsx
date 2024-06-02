import Navbar from "../components/Layout/Navbar";
import Banner from "../components/CreativeAgency/Banner";
import FeaturedServices from "../components/CreativeAgency/FeaturedServices";
import PartnerSlider from "../components/Common/Partner/PartnerSlider";
import OurServices from "../components/CreativeAgency/OurServices";
import OurFeaturesTab from "../components/Common/OurFeaturesTab";
import FunFacts from "../components/Common/FunFacts";
import ProjectGallerySlider from "../components/Common/ProjectGallerySlider";
import OurTeam from "../components/Common/OurTeam";
import Solution from "../components/Common/Solution";
import Testimonials from "../components/Common/Testimonials";
import Pricing from "../components/Common/Pricing";
import SubscribeFluid from "../components/Common/SubscribeFluid";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/Layout/Footer";
import Faq from "@/components/SaasAgency/Faq";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <FeaturedServices />


      {/* <OurServices /> */}

      <OurFeaturesTab />

      {/* <FunFacts /> */}

      {/* <ProjectGallerySlider /> */}

      {/* <OurTeam /> */}
      <PartnerSlider />


      <Solution />

      <Testimonials />

      {/* <Pricing /> */}

      <SubscribeFluid />

      <LatestNews />
      <Faq/>

      <Footer />
    </>
  );
}
