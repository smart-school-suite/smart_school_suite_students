import Svg, { G, Path, Rect } from "react-native-svg";
export const GpaLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill="none" stroke="currentColor" strokeWidth={1}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10v6m4-4v4m4-8v8"
      />
      <Rect width={18} height={16} x={3} y={4} rx={2} />
    </G>
  </Svg>
);
