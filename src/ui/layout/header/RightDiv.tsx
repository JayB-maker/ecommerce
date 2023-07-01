import { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";
import { navDetails } from "../../../data";
import {
  Card,
  Image,
  LinkText,
  Text,
  black,
  primaryBlue,
  white,
} from "../../styles";
import { useNavigate } from "react-router-dom";

const RightDiv = (props: { mobileNav: any; setMobileNav: any }) => {
  const { mobileNav, setMobileNav } = props;
  const { cartItems } = useContext(CartContext);
  const navigate =useNavigate();
  return (
    <>
      <Card flex gap="20px" alignitems="center">
        <Card flex alignitems="center" gap="24px" smdisplay="none">
          {navDetails.map((nav, index) => (
            <LinkText
              to={nav.path}
              key={index}
              color={black}
              size="14px"
              hcolor={primaryBlue}
            >
              {nav.nav}
            </LinkText>
          ))}
        </Card>
        <Card
          width="40px"
          height="40px"
          radius="50%"
          position="relative"
          flex
          justifycontent="center"
          alignitems="cenetr"
          padding="5px"
          pointer
          onClick={() => navigate('/cart')}
        >
          <Card
            width="15px"
            height="15px"
            radius="50%"
            bg="red"
            position="absolute"
            top="-5px"
            right="0px"
            flex
            justifycontent="center"
            alignitems="center"
          >
            <Text color={white} size="7px" heavy>{cartItems.length}</Text>
          </Card>
          <Image src="assets/cart.svg" alt="cart" width="100%" />
        </Card>
        <Card
          pointer
          display="none"
          smdisplay="block"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <Image
            src={mobileNav ? "assets/close.svg" : "assets/open.svg"}
            alt={mobileNav ? "close" : "open"}
            width="60%"
          />
        </Card>
      </Card>
    </>
  );
};

export default RightDiv;
