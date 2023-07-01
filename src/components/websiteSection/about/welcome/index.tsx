import MainText from "../../../../ui/mainText";
import {
  Card,
  InnerSection,
  MainSection,
  TitleText,
  black,
  gray,
} from "../../../../ui/styles";

const Welcome = () => {
  return (
    <MainSection width="100%" mtop="100px" smmargin="30px 0 0">
      <InnerSection>
        <Card flex gap="32px" mdflexdirection="column-reverse" alignitems="center">
          <Card flexratio="1" bg={gray} height="100%" width="100%">
            <video
              src="assets/Alemax.mp4"
              style={{ width: "100%" }}
              autoPlay
              loop
              muted
            ></video>
          </Card>
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
              Welcome
            </TitleText>
            <MainText text="Alemax creation is an indigenous Fashion Designer and a top class fashion school located in Akure, Ondo State, Nigeria. We are focused on offering top-notch services to our growing client while retaining or place as the most preferred fashion designer company in Nigeria." />
            <MainText text="Our team of expert tailors and seamstresses work tirelessly to ensure that each and every cloth we create is absolutely perfect. We only use the finest fabrics and trimmings, and our attention to detail is second to none." />
            <MainText text="Our reputation for delivering neatly sewn and well tailored wears on time and on budget has continued to win us loyal customers." />
            <MainText text="We have a well – structured training system designed to empower young people and mentor them in establishing and building their own business." />
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Welcome;
