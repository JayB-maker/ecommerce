import AboutCEO from "../components/websiteSection/about/aboutCEO";
import AboutHeroSection from "../components/websiteSection/about/aboutHeroSection";
import Vision from "../components/websiteSection/about/vision";
import Welcome from "../components/websiteSection/about/welcome";
import Layout from "../ui/layout";

const AboutPage = () => {
  return (
    <Layout>
      <AboutHeroSection />
      <Welcome />
      <AboutCEO />
      <Vision />
    </Layout>
  );
};

export default AboutPage;
