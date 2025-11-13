import Svg, { Path } from "react-native-svg";
export const Option = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={3.75}
      d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
    />
  </Svg>
);

