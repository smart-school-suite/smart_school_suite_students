import Svg, { Path } from "react-native-svg";
export const Arrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
           width={props.width || 20} 
           height={props.height || 20} 
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.884 5.116a1.253 1.253 0 0 0-1.768 0l-5 5a1.25 1.25 0 0 0 1.768 1.768l2.866-2.866V18a1.25 1.25 0 1 0 2.5 0V9.018l2.866 2.866a1.25 1.25 0 1 0 1.768-1.768z"
    />
  </Svg>
);
