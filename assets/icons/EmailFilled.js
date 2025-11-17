import Svg, { Path } from "react-native-svg";
export const EmailFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.width || 24}
    viewBox="0 0 36 36"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
      className="clr-i-solid clr-i-solid-path-1"
    />
    <Path
      fill="currentColor"
      d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
      className="clr-i-solid clr-i-solid-path-2"
    />
    <Path fill="none" d="M0 0h36v36H0z" />
  </Svg>
);
