import Svg, { Path } from "react-native-svg";
export const Dot = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 15 15"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7.5 5.125a2.375 2.375 0 1 1 0 4.75a2.375 2.375 0 0 1 0-4.75"
    />
  </Svg>
);
