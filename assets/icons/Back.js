import Svg, { Path } from "react-native-svg";
export const Back = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
       width={props.width || 24}
    height={props.width || 24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 5l-7 7l7 7"
    />
  </Svg>
);

