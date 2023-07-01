import {
  LinkText,
  TitleText,
  black,
  primaryBlue,
} from "../../styles";

const LeftDiv = () => {
  return (
    <>
      {/* <Image src="" alt="" /> */}
      <LinkText to="/">
        <TitleText weight="700" heavy color={black}>
          ALEMAX<span style={{ color: `${primaryBlue}` }}>CREATION</span>
        </TitleText>
      </LinkText>
    </>
  );
};

export default LeftDiv;
