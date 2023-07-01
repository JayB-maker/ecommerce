import { TitleText, black } from "../styles";

interface ITitleProps {
  title?: string;
  span?: string;
  center?: boolean;
  width?: string;
  color?: string;
}

const Title = (props: ITitleProps) => {
  const { center, width, color } = props;
  return (
    <TitleText
      size="48px"
      lineheight="65.28px"
      width={width}
      mdwidth="100%"
      mdsize=""
      mdlineheight=""
      smsize="25px"
      smlineheight="36px"
      weight="600"
      color={color ? color : black}
      center={center ? true : false}
    >
      {/* {title} <span style={{ color: `${primaryRed}` }}>{span}</span> */}
    </TitleText>
  );
};

export default Title;
