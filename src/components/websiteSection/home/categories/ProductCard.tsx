import {
  Button,
  Card,
  Image,
  TitleText,
  black,
  gray,
  primaryBlue,
} from "../../../../ui/styles";

interface IProductProps {
  image?: string;
  name?: string;
  price: string;
  addToCart?: any;
}

const ProductCard = (props: IProductProps) => {
  const { image, name, price, addToCart } = props;
  const discountedPrice = (price: any) => {
    const originalPrice = parseInt(price) / 0.8;
    return originalPrice;
  };
  return (
    <Card radius="12px" width="300px !important" bg={gray}>
      <Card
        radius="12px"
        overflow="hidden"
        width="300px !important"
        height="300px"
        bg={primaryBlue}
        flex
        justifycontent="center"
      >
        <Image src={image} alt={name} height="100%" />
      </Card>
      <Card padding="24px" flex flexdirection="column" gap="8px">
        <TitleText
          size="16px"
          lineheight="20px"
          mdwidth="100%"
          mdsize=""
          mdlineheight=""
          smsize="20px"
          smlineheight="36px"
          weight="600"
          color={black}
        >
          {name}
        </TitleText>
        <TitleText
          size="14px"
          lineheight="18px"
          mdwidth="100%"
          mdsize=""
          mdlineheight=""
          smsize="18px"
          smlineheight="36px"
          weight="400"
          color={black}
          style={{ textDecoration: "line-through" }}
        >
          ₦{discountedPrice(price)}
        </TitleText>
        <Card flex justifycontent="space-between" alignitems="center">
          <TitleText
            size="18px"
            weight="700"
            lineheight="18px"
            mdwidth="100%"
            mdsize=""
            mdlineheight=""
            smsize="18px"
            smlineheight="36px"
            color={black}
          >
            ₦{price}
          </TitleText>
          <Button
            padding="4px 8px"
            size="12px"
            bg={primaryBlue}
            color="white"
            style={{ whiteSpace: "nowrap" }}
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </Card>
      </Card>
    </Card>
  );
};

export default ProductCard;
