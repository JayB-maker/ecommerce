import { galleryDetails } from "../../../../data";
import {
  Card,
  Image,
  InnerSection,
  MainSection,
  primaryBlue,
} from "../../../../ui/styles";

const MainGallery = () => {
  return (
    <MainSection width="100%" padding="100px 0 0">
      <InnerSection>
        <Card
          display="grid"
          gridcolumn="repeat(4, 1fr)"
          mdgridcolumn="1fr 1fr"
          smgridcolumn="1fr"
          gap="24px"
        >
          {galleryDetails.map((gallery, index) => (
            <Card
              radius="12px"
              overflow="hidden"
            //   width="300px !important"
              height="300px"
              bg={primaryBlue}
              flex
              justifycontent="center"
              key={index}
            >
              <Image src={gallery} alt="Alemax gallery" height="100%" />
            </Card>
          ))}
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default MainGallery;
