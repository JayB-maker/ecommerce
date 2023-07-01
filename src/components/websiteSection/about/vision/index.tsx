import {
  Card,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  black,
  gray,
} from "../../../../ui/styles";

const Vision = () => {
  const VisionDetails = [
    {
      icon: "",
      title: "Our Mission",
      details:
        "To design and produce high-quality, fashionable clothes that express individual style and inspire confidence in our customers and ultimate solution for achieving the perfect healthy skin.",
    },
    {
      icon: "",
      title: "Our Vision",
      details:
        "We strives to be the premier fashion designer for unisex apparel and provide skincare product which has high efficacy and proven customer satisfactions without breaking the bank.",
    },
    {
      icon: "",
      title: "Our Capability",
      details:
        "we specializes in unisex clothing both ready to wear, bridal outfit,casual,bespoke,aso ebi, Native wear,etc with a specialist to create and design an outfit that perfectly fits and also improve the health and appearance of your skin, promote skin renewal, fight signs of aging and provide an overall radiant glow.",
    },
  ];

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
          {VisionDetails.map((detail, index) => (
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

export default Vision;
