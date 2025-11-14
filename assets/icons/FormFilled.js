import Svg, { Path } from "react-native-svg";
export const FormFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.width || 24}
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M6.5 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5 3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm2.5-1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M8 13.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m1-4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5m.5 3.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
    />
  </Svg>
);
