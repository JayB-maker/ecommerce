import {
  Card,
  InnerSection,
  MainSection,
  primaryBlue,
  TitleText,
  white,
} from "../../../../ui/styles";
import {} from "../../../../ui/styles";

const AboutHeroSection = () => {
  return (
    <MainSection width="100%" mtop="20px" smmargin="20px 0 0">
      <InnerSection>
        <Card
          flex
          alignitems="center"
          justifycontent="center"
          padding="150px 90px"
          smpadding="80px 18px"
          radius="16px"
          bg={primaryBlue}
        >
          <TitleText
            size="63px"
            weight="700"
            color={white}
            lineheight="63px"
            smlineheight="35px"
            smsize="35px"
            center
          >
            ABOUT
          </TitleText>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default AboutHeroSection;
