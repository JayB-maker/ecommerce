import {
  Card,
  Image,
  InnerSection,
  MainSection,
  TitleText,
  black,
  gray,
} from "../../../../ui/styles";
import MainText from "../../../../ui/mainText";

const AboutCEO = () => {
  return (
    <MainSection width="100%" mtop="100px">
      <InnerSection>
        <Card flex gap="32px" mdflexdirection="column" alignitems="flex-end">
          <Card flex flexdirection="column" gap="30px" flexratio="1">
            <TitleText
              size="24px"
              lineheight="20px"
              mdwidth="100%"
              mdsize=""
              mdlineheight=""
              smsize="20px"
              smlineheight="36px"
              weight="600"
              color={black}
            >
              About the CEO
            </TitleText>
            <MainText text="Olori-Oluwakemi Ade Arowolo is an entrepreneur and fashion designer who runs a business called AleMax Skin Care. She specializes in selling natural skin care products and creating Auto-Gele, a type of headgear. She is a mother of two children named Alexander and Maxwell, and her brand name is derived from their names." />
            <MainText text="Olori-Oluwakemi has a passion for providing skin care advice and coordinating outfits for models and actors in photo shoots, TV shows, and films. She also selects props and accessories for these shoots. She has over 7 years of experience in clothing styling and conceptualization." />
            <MainText text="As a fashion designer, Olori-Oluwakemi creates designs in various styles to meet the preferences of her customers. She has a successful track record of recruiting, training, and motivating her employees, leading to significant sales growth. Her primary goal is to offer superior clothing styles that make her clients feel confident and regal." />
            <MainText text="Olori-Oluwakemi Arowolo founded Alemax Skincare Products after recognizing the need for effective skincare products. She uses plant-based ingredients to create products like body lotions and face creams. The brand focuses on helping customers achieve a glamorous look, regardless of their skin type, and has received positive feedback and success stories." />
            <MainText text="She holds a bachelor's degree in microbiology and has obtained fashion design certificates from Nigerian academies and online fashion schools. She has won awards for her hard work and styling skills. Throughout her career, she has excelled in designing clothes for various occasions and clientele." />
            {/* <MainText text="Olori-Oluwakemi enjoys meeting new people and building connections. Her ability to find common interests and make others feel comfortable is beneficial when starting new projects and working with clients. She is eager to receive support, partnerships, reviews, and testimonials." /> */}
          </Card>
          <Card
            flexratio="1"
            bg={gray}
            height="100%"
            width="100%"
            radius="12px"
            overflow="hidden"
          >
            <Image src="assets/aboutCEO.jpeg" alt="alemax-ceo" width="100%" />
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default AboutCEO;
