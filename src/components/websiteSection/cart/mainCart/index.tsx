import { useContext, useState } from "react";
import {
  Button,
  Card,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  primaryBlue,
  white,
} from "../../../../ui/styles";
import CartContext from "../../../../context/cart/CartContext";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import PaymentPopup from "./paymentPopup/PaymentPopup";

const MainCart = () => {
  const [paymentPopup, setPaymentPopup] = useState(false);
  const { cartItems, decreaseItem, increaseItem, removeItem } =
    useContext(CartContext);

  const increaseCartItem = (item: any) => {
    increaseItem(item);
  };

  const decreaseCartItem = (item: any) => {
    item.quantity < 2 ? removeItem(item.id) : decreaseItem(item);
  };

  const removeCartItem = (id: any) => {
    removeItem(id);
  };

  const total = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const navigate = useNavigate();
  const handleShopNavigation = () => {
    navigate("/shop");
  };

  const summaryDetails = [
    {
      label: "Tax",
      value: 0.075 * parseInt(total),
    },
    {
      label: "Delivery",
      value: "3000",
    },
  ];

  return (
    <>
    <MainSection width="100%" mtop="100px">
      <InnerSection>
        {cartItems.length === 0 ? (
          <Card
            flex
            justifycontent="center"
            flexdirection="column"
            gap="20px"
            alignitems="center"
            height="100px"
          >
            <TitleText size="32px" heavy>
              No Item In Cart Yet
            </TitleText>
            <Text>Try adding an item to cart</Text>
            <Button
              onClick={handleShopNavigation}
              color={white}
              bg={primaryBlue}
              padding="12px 24px"
            >
              Go to Shop
            </Button>
          </Card>
        ) : (
          <Card flex gap="24px" smflexdirection="column">
            <Card flex flexdirection="column" gap="24px" flexratio="2">
              {cartItems.map((item) => {
                return (
                  <CartCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    increaseItem={() => increaseCartItem(item)}
                    decreaseItem={() => decreaseCartItem(item)}
                    removeItem={() => removeCartItem(item.id)}
                  />
                );
              })}
            </Card>
            <Card
              flexratio="1"
              width="100%"
              shadow="2px 6px 38px rgba(15, 15, 15, 0.08)"
              radius="16px"
              padding="32px"
              height="fit-content"
              flex
              flexdirection="column"
              gap="24px"
            >
              <Card
                flex
                justifycontent="space-between"
                alignitems="center"
                bbottom="1px solid black"
                padding="0 0 12px"
              >
                <TitleText>Total:</TitleText>
                <TitleText size="28px" heavy>
                  ₦{total}
                </TitleText>
              </Card>
              {summaryDetails.map((summary, index) => (
                <Card key={index}>
                  <Text size="16px" margin="0 0 8px" heavy>
                    {summary.label}
                  </Text>
                  <Card
                    border={`1px solid gray`}
                    radius="8px"
                    padding="12px"
                    width="100%"
                  >
                    <Text>{summary.value}</Text>
                  </Card>
                </Card>
              ))}
              <Button
                radius="8px"
                padding="20px"
                color={white}
                bg={primaryBlue}
                onClick={() => setPaymentPopup(true)}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Card>
        )}
      </InnerSection>
    </MainSection>
    {paymentPopup && <PaymentPopup amount={total} setPopup={setPaymentPopup}/>}
    </>
  );
};

export default MainCart;
