import {
  Card,
  InnerSection,
  MainSection,
  primaryBlue,
  TitleText,
  white,
} from "../../../../ui/styles";
import {} from "../../../../ui/styles";

const HomeHeroSection = () => {
  return (
    <MainSection width="100%" mtop="20px" smmargin="20px 0 0">
      <InnerSection>
        <Card
          flex
          alignitems="center"
          justifycontent="space-between"
          smflexdirection="column"
          padding="40px 90px"
          smpadding="24px 18px"
          radius="16px"
          bg={primaryBlue}
          smgap="40px"
        >
          <Card flex flexdirection="column" gap="20px">
            <TitleText
              size="30px"
              weight="600"
              color={white}
              lineheight="30px"
              smsize="20px"
            >
              Best Deal Online on smart outfits
            </TitleText>
            <TitleText
              size="63px"
              weight="700"
              color={white}
              lineheight="63px"
              smlineheight="35px"
              smsize="35px"
            >
              SMART OUTFITS.
            </TitleText>
            <TitleText
              size="30px"
              weight="600"
              color={white}
              lineheight="30px"
              smsize="20px"
            >
              UP to 20% OFF
            </TitleText>
          </Card>
          <Card width="40%" radius="8px" overflow="hidden" smwidth="100%">
            <video
              src="assets/Alemax.mp4"
              style={{ width: "100%" }}
              autoPlay
              loop
              muted
            ></video>
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default HomeHeroSection;
