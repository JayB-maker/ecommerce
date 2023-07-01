import Layout from "../ui/layout";
import Contact from "../components/websiteSection/contact/contact";
import ContactHeroSection from "../components/websiteSection/contact/contacttHeroSection";

const ContactPage = () => {
  return (
    <Layout>
      <ContactHeroSection />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
