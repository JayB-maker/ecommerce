import { black, primaryBlue, Text } from "../styles";

interface ITextProps {
  text?: string;
  span?: string;
  center?: boolean;
  width?: string;
  color?: string;
  size?: string;
  heavy?: boolean;
}

const MainText = (props: ITextProps) => {
  const { span, text, center, width, color, size, heavy } = props;
  return (
    <Text
      heavy={heavy}
      size={size ? size : "18px"}
      lineheight="30.6px"
      width={width}
      mdwidth="100%"
      mdsize=""
      mdlineheight=""
      smsize="18px"
      smlineheight="18px"
      color={color ? color : black}
      center={center ? true : false}
    >
      {text} <span style={{ color: `${primaryBlue}` }}>{span}</span>
    </Text>
  );
};

export default MainText;
