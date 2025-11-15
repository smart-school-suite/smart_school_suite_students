import Svg, { G, Path } from "react-native-svg";
 export const CheckLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 48 48"
    {...props}
  >
    <G fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={4}>
      <Path d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" />
      <Path strokeLinecap="round" d="m16 24l6 6l12-12" />
    </G>
  </Svg>
);

