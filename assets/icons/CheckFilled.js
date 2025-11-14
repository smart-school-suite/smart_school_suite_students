import Svg, { Defs, G, Mask, Path } from "react-native-svg";
export const CheckFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.width || 24}
    viewBox="0 0 48 48"
    {...props}
  >
    <Defs>
      <Mask id="SVGIQLGgV2F">
        <G fill="none" strokeLinejoin="round" strokeWidth={4}>
          <Path
            fill="#fff"
            stroke="#fff"
            d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
          />
          <Path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12" />
        </G>
      </Mask>
    </Defs>
    <Path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIQLGgV2F)" />
  </Svg>
);
