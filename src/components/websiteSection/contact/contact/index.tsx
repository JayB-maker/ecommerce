import {
  Card,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  gray,
} from "../../../../ui/styles";

const Contact = () => {
  const contactDetails = [
    {
      means: "Call us",
      details: "09126496050, 07031043118",
    },
    {
      means: "Mail us",
      details: "contact@alemaxcreations.com.ng",
    },
    {
      means: "Locate us",
      details: "Bishop Lanre Obemebe Street, Elshadahi Estate Alagbaka ,Akure, Ondo State, Nigeria.",
    },
  ];
  return (
    <MainSection width="100%" mtop="100px">
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          gap="80px"
          smgap="40px"
          alignitems="center"
        >
          <Card
            display="grid"
            gridcolumn="repeat(3, 1fr)"
            mdgridcolumn="1fr 1fr"
            smgridcolumn="1fr"
            gap="24px"
          >
            {contactDetails.map((item, index) => (
              <Card
                key={index}
                padding="32px"
                bg={gray}
                radius="24px"
                flex
                flexdirection="column"
                gap="16px"
              >
                <TitleText size="24px" lineheight="32px" weight="700">
                  {item.means}
                </TitleText>
                <Text size="18px" lineheight="32px" weight="400">
                  {item.details}
                </Text>
              </Card>
            ))}
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Contact;
