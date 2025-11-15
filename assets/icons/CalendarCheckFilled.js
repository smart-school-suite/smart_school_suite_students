import Svg, { Path } from "react-native-svg";
export const CalendarCheckFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M21 17.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5h18zm-4.72-6.53a.75.75 0 0 0-1.06 0l-4.47 4.47l-1.97-1.97l-.056-.052A.75.75 0 0 0 7.72 14.78l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06M17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3z"
    />
  </Svg>
);
