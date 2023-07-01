import Layout from "../ui/layout";
import Categories from "../components/websiteSection/home/categories";
import ShopHeroSection from "../components/websiteSection/shop/shopHeroSection";

const ShopPage = () => {
  return (
    <Layout>
      <ShopHeroSection />
      <Categories />
    </Layout>
  );
};

export default ShopPage;
