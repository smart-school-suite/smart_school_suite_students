import Svg, { Path } from "react-native-svg";
export const Chevron = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill={"none"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M328 112L184 256l144 144"
    />
  </Svg>
);

