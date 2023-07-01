import {
  Card,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  black,
  gray,
} from "../../../../ui/styles";

const WhatWeDoDetails = [
  {
    icon: "",
    title: "We Manage",
    details:
      "Our skincare products are designed to help you glow from within with our wide selection of products. They're designed to improve the health and appearance of your skin, promote skin renewal, fight signs of aging and provide an overall radiant glow.",
  },
  {
    icon: "",
    title: "We Design",
    details:
      "We design our clothes with your taste and need in mind. Our Product line is rooted in the belief that every person is unique and deserves to gleam in a special way. Our clothing is made from high-quality materials and top-notch construction techniques and are designed with the goal of ensuring that you appear stunning.",
  },
  {
    icon: "",
    title: "We Train",
    details:
      "We offers training of people in skincare product and fashion designing. ALEMAX's main objective is to help people learn the skills they need in order to be successful in making their own business. We provide hands on training, so our students can apply what we teach them in real life situations.",
  },
];

const WhatWeDo = () => {
  return (
    <MainSection width="100%" padding="100px 0 0">
      <InnerSection>
        <Card
          display="grid"
          gridcolumn="repeat(3, 1fr)"
          gap="16px"
          mdgridcolumn="1fr 1fr"
          smgridcolumn="1fr"
        >
          {WhatWeDoDetails.map((detail, index) => (
            <Card
              flex
              flexdirection="column"
              gap="12px"
              padding="24px 16px"
              key={index}
              radius="12px"
              bg={gray}
            >
              <TitleText
                size="24px"
                lineheight="30px"
                mdwidth="100%"
                mdsize=""
                mdlineheight=""
                smsize="25px"
                smlineheight="36px"
                weight="600"
                color={black}
              >
                {detail.title}
              </TitleText>
              <Text
                size="16px"
                lineheight="24px"
                mdwidth="100%"
                mdsize=""
                mdlineheight=""
                smsize="px"
                smlineheight="36px"
                weight="400"
                color={black}
              >
                {detail.details}
              </Text>
            </Card>
          ))}
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default WhatWeDo;
