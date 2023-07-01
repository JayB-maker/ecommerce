import Layout from "../ui/layout";
import GalleryHeroSection from "../components/websiteSection/gallery/galleryHeroSection";
import MainGallery from "../components/websiteSection/gallery/mainGallery";

const GalleryPage = () => {
  return (
    <Layout>
      <GalleryHeroSection />
      <MainGallery />
    </Layout>
  );
};

export default GalleryPage;
