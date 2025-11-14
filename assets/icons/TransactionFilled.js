import Svg, { Defs, G, Mask, Path } from "react-native-svg";
export const TransactionFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.width || 24}
    viewBox="0 0 48 48"
    {...props}
  >
    <Defs>
      <Mask id="SVG0OxWMYek">
        <G
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        >
          <Path
            fill="#fff"
            stroke="#fff"
            d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3"
          />
          <Path stroke="#000" d="m21 31l5 4l8-10M14 15h20m-20 8h8" />
        </G>
      </Mask>
    </Defs>
    <Path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVG0OxWMYek)" />
  </Svg>
);

