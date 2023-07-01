import { useState } from "react";
import {
  Card,
  InnerSection,
  LinkText,
  MainSection,
  black,
  white,
} from "../../styles";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";
import { navDetails } from "../../../data";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <MainSection
        width="100%"
        bg={white}
        height={mobileNav ? "100vh" : "unset"}
        position="fixed"
        top="0"
        left="0"
        index="100"
      >
        <InnerSection>
          <Card
            flex
            justifycontent="space-between"
            alignitems="center"
            padding="25px 0"
          >
            <LeftDiv />
            <RightDiv mobileNav={mobileNav} setMobileNav={setMobileNav} />
          </Card>
        </InnerSection>
        {mobileNav && (
          <InnerSection>
            <Card flex flexdirection="column" gap="20px"padding="24px 0">
              {navDetails.map((nav, index) => (
                <LinkText
                  to={nav.path}
                  size="18px"
                  lineheight="24px"
                  color={black}
                  key={index}
                >
                  {nav.nav}
                </LinkText>
              ))}
            </Card>
          </InnerSection>
        )}
      </MainSection>
    </>
  );
};

export default Header;
