import Svg, { Path } from "react-native-svg";
export const Forward = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
       width={props.width || 24}
    height={props.width || 24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0"
    />
  </Svg>
);
