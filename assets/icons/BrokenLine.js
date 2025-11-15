import Svg, { Line } from "react-native-svg";
export const BrokenLine = (props) => (
  <Svg
    width={props.width || 200}
    height={props.height || 1}
    viewBox="0 0 200 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Line x1={200} y1={0.5} y2={0.5} stroke={props.color || "black"} strokeDasharray="6 8" />
  </Svg>
);
