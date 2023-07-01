import { navDetails } from "../../../data";
import {
  Card,
  InnerSection,
  LinkText,
  MainSection,
  black,
  gray,
  primaryBlue,
} from "../../styles";

const socialDetails = [
  {
    name: "Instagram",
    path: "https://instagram.com/alemax_creations?igshid=ZGUzMzM3NWJiOQ==",
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/profile.php?id=100087920807170",
  },
  {
    name: "Tiktok",
    path: "https://www.tiktok.com/@alemax_world02?_t=8coBL6HRXgU&_r=1",
  },
];

const Footer = () => {
  return (
    <MainSection width="100%" padding="32px 0" bg={gray} mtop="150px">
      <InnerSection>
        <Card
          flex
          justifycontent="space-between"
          alignitems="center"
          mdflexdirection="column"
          gap="20px"
        >
          <Card flex alignitems="center" justifycontent="center" gap="32px">
            {navDetails.map((item, index) => (
              <LinkText
                to={item.path}
                color={black}
                size="14px"
                hcolor={primaryBlue}
                key={index}
              >
                {item.nav}
              </LinkText>
            ))}
          </Card>
          <Card flex alignitems="center" justifycontent="center" gap="32px">
            {socialDetails.map((item, index) => (
              <LinkText
                to={item.path}
                color={black}
                size="14px"
                hcolor={primaryBlue}
                key={index}
              >
                {item.name}
              </LinkText>
            ))}
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Footer;
