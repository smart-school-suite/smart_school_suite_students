import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  TextInput,
  View
} from "react-native";
import { colorPrimitives } from "../../../constants/theme";
import { utilityStyles } from "../../../styles/utility";

const INPUT_WIDTH = 35;
const INPUT_HEIGHT = 56;

const StepInput = forwardRef((props, ref) => {
  const {
    length = 5,
    value = "",
    onChange,
    disabled = false,
    secureTextEntry = false,
    keyboardType = "numeric",
  } = props;

  const inputs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const digits = (value + "").padEnd(length, "").split("").slice(0, length);

  const focusInput = useCallback(
    (index) => {
      const input = inputs.current[index];
      input?.focus();
    },
    []
  );

  const focusNext = useCallback(
    (index) => {
      if (index < length - 1) {
        focusInput(index + 1);
      }
    },
    [length, focusInput]
  );

  const focusPrev = useCallback(
    (index) => {
      if (index > 0) {
        focusInput(index - 1);
      }
    },
    [focusInput]
  );

  const handleChange = useCallback(
    (text, index) => {
      const newDigits = [...digits];
      if (text.length > 0) {
        newDigits[index] = text[0];
        onChange?.(newDigits.join("").slice(0, length));
        focusNext(index);
      } else {
        newDigits[index] = "";
        onChange?.(newDigits.join(""));
      }
    },
    [digits, onChange, length, focusNext]
  );

  const handleKeyPress = useCallback(
    (e, index) => {
      if (e.nativeEvent.key === "Backspace" && !digits[index]) {
        focusPrev(index);
      }
    },
    [digits, focusPrev]
  );
  
  useImperativeHandle(ref, () => ({
    focus: () => focusInput(0),
    clear: () => onChange?.(""),
  }));

  return (
    <View style={[utilityStyles.flexRow, utilityStyles.gSm]}>
      {Array.from({ length }).map((_, index) => {
        const isFocused = focusedIndex === index;
        const hasValue = !!digits[index];

        return (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={[
              styles.input,
              isFocused && styles.inputFocused,
              hasValue && styles.inputFilled,
            ]}
            value={digits[index]}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(-1)}
            keyboardType={keyboardType}
            maxLength={1}
            textContentType="oneTimeCode"
            secureTextEntry={secureTextEntry}
            editable={!disabled}
            selectTextOnFocus={true}
            accessibilityLabel={`Digit ${index + 1} of ${length}`}
          />
        );
      })}
    </View>
  );
});

StepInput.displayName = "StepInput";

export default memo(StepInput);

const styles = StyleSheet.create({
  input: {
    ...utilityStyles.text4Xl,
    ...utilityStyles.fontBold,
    ...utilityStyles.textCenter,
    height: INPUT_HEIGHT,
    width: INPUT_WIDTH,
    borderBottomWidth: 2,
    borderBottomColor: colorPrimitives.light.colorTextPrimary,
    color: colorPrimitives.light.colorTextPrimary,
    textAlign: "center",
    paddingBottom:0,
    paddingTop:0
  },
  inputFocused: {
    borderBottomColor: colorPrimitives.light.colorPrimary,
  },
  inputFilled: {
    fontWeight: "600",
  },
});