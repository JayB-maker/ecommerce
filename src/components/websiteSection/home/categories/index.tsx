import { useContext } from "react";
import CartContext from "../../../../context/cart/CartContext";
import { categoryDetails } from "../../../../data";
import {
  Card,
  InnerSection,
  MainSection,
  TitleText,
  black,
} from "../../../../ui/styles";
import ProductCard from "./ProductCard";

const Categories = () => {
  const { addToCart } = useContext(CartContext);
  const addItemToCart = (item: any) => {
    addToCart(item);
  };
  return (
    <>
      <MainSection width="100%" padding="100px 0 0">
        <InnerSection>
          <Card flex flexdirection="column" gap="36px">
            <TitleText
              size="40px"
              lineheight="55px"
              mdwidth="100%"
              mdsize=""
              mdlineheight=""
              smsize="30px"
              smlineheight="36px"
              weight="600"
              color={black}
            >
              Our main categories
            </TitleText>
            {categoryDetails.map((category, index) => (
              <Card key={index} flex flexdirection="column" gap="16px">
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
                  {category.category}
                </TitleText>
                <Card overflow="scroll !important" flex gap="16px">
                  {category.products.map((product, index) => {
                    return (
                      <ProductCard
                        image={product.image}
                        key={index}
                        name={product.name}
                        price={product.price}
                        addToCart={() => addItemToCart(product)}
                      />
                    );
                  })}
                </Card>
              </Card>
            ))}
          </Card>
        </InnerSection>
      </MainSection>
    </>
  );
};

export default Categories;
