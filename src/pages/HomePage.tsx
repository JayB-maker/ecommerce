import Layout from "../ui/layout";
import HomeHeroSection from "../components/websiteSection/home/homeHeroSection";
import Categories from "../components/websiteSection/home/categories";
import WhatWeDo from "../components/websiteSection/home/whatWeDo";

const HomePage = () => {
  return (
    <Layout>
      <HomeHeroSection />
      <WhatWeDo />
      <Categories />
    </Layout>
  );
};

export default HomePage;
