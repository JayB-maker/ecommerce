import {
  Button,
  Card,
  Image,
  Text,
  TitleText,
  gray,
  primaryBlue,
} from "../../../../ui/styles";

interface ICartCardProps {
  name: string;
  price: string;
  image: string;
  quantity: any;
  increaseItem: any;
  decreaseItem: any;
  removeItem: any;
}

const CartCard = (props: ICartCardProps) => {
  const {
    image,
    name,
    price,
    decreaseItem,
    increaseItem,
    quantity,
    removeItem,
  } = props;
  return (
    <Card
      flex
      justifycontent="space-between"
      alignitems="center"
      width="100%"
      shadow="2px 6px 38px rgba(15, 15, 15, 0.08)"
      radius="16px"
      padding="16px"
    >
      <Card flex gap="8px" alignitems="center">
        <Card
          width="100px"
          height="100px"
          bg={gray}
          radius="8px"
          overflow="hidden"
          flex
          justifycontent="center"
        >
          <Image src={image} alt={name} height="100%" />
        </Card>
      </Card>
      <Card>
        <Card flex flexdirection="column" gap="8px">
          <TitleText smsize="16px">{name}</TitleText>
          <Card
            border={`1px solid ${primaryBlue}`}
            radius="8px"
            flex
            overflow="hidden"
            width="fit-content"
            alignitems="center"
          >
            <Button
              padding="4px 12px"
              radius="8px"
              bg="transparent"
              color={primaryBlue}
              size="20px"
              onClick={decreaseItem}
            >
              -
            </Button>
            <Card>
              <Text>{quantity}</Text>
            </Card>
            <Button
              padding="4px 12px"
              radius="8px"
              bg="transparent"
              color={primaryBlue}
              size="20px"
              onClick={increaseItem}
            >
              +
            </Button>
          </Card>
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <Text size="24px" smsize="20px" heavy>
          ₦{quantity * parseInt(price)}
        </Text>
        <Button
          padding="8px 12px"
          mdpadding="4px 6px"
          radius="8px"
          color={primaryBlue}
          size="14px"
          onClick={removeItem}
          width="fit-content"
        >
          Remove
        </Button>
      </Card>
    </Card>
  );
};

export default CartCard;
