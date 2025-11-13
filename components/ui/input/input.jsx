import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";


import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
import { INPUT_TYPES } from "./inputConfig";
const Input = forwardRef(function Input(
  {
    type = "text",
    value = "",
    onChangeText,
    placeholder,
    disabled = false,
    error = false,
    theme = "light",
    leftIcon = null,
    rightIcon = null,
    showClear = true,
    onSubmitEditing,
    onFocus,
    onBlur,
    style = {},
    containerStyle = {},
  },
  ref
) {
  const base = INPUT_TYPES[type] || INPUT_TYPES.text;
  const finalPlaceholder = placeholder ?? base.placeholder;
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => onChangeText?.(""),
    setValue: (text) => onChangeText?.(text),
  }));
  const handleFocus = useCallback((e) => {
    setFocused(true);
    onFocus?.(e);
  }, [onFocus]);

  const handleBlur = useCallback((e) => {
    setFocused(false);
    onBlur?.(e);
  }, [onBlur]);

  const handleClear = useCallback(() => {
    onChangeText?.("");
    inputRef.current?.focus();
  }, [onChangeText]);

  const hasValue = !!value;
  const showClearButton =
    showClear && hasValue && !rightIcon && !disabled && type !== "password";
  const themeStyles = theme === "light" ? lightModeStyles : {};

  return (
    <View
      style={[
        styles.container,
        focused && styles.containerFocused,
        error && styles.containerError,
        containerStyle,
      ]}
    >
      {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

      <TextInput
        ref={inputRef}
        style={[
          utilityStyles.pMd,
          themeStyles.borderColor,
          utilityStyles.textMd,
          themeStyles.bgLight,
          utilityStyles.roundedLg,
          styles.inputBase,
          focused && styles.inputFocused,
          error && styles.inputError,
          leftIcon && styles.inputWithLeftIcon,
          (rightIcon || showClearButton) && styles.inputWithRightIcon,
          style,]}
        value={value}
        onChangeText={onChangeText}
        placeholder={finalPlaceholder}
        placeholderTextColor="#999"
        keyboardType={base.keyboardType}
        textContentType={base.textContentType}
        autoComplete={base.autoComplete}
        autoCapitalize={base.autoCapitalize}
        autoCorrect={base.autoCorrect}
        secureTextEntry={base.secureTextEntry ?? false}
        returnKeyType="next"
        editable={!disabled}
        selectTextOnFocus={Platform.OS === "ios"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSubmitEditing={onSubmitEditing}
        accessibilityLabel={finalPlaceholder}
      />
      {showClearButton && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          accessibilityRole="button"
          accessibilityLabel="Clear"
        >
          <Text style={styles.clearIcon}>×</Text>
        </TouchableOpacity>
      )}

      {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
    </View>
  );
});

export default memo(Input);


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderWidth: 0.5,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    ...utilityStyles.roundedLg
  },
  containerFocused: {
    borderColor: lightModeStyles?.colorPrimary,
    borderWidth: 1,
  },
  containerError: {
    borderColor: "#e53935",
  },

  inputBase: {
    flex: 1,
    height: "100%",
    color: "#555",
  },
  inputFocused: {},
  inputError: {
    color: "#e53935",
  },

  inputWithLeftIcon: { paddingLeft: 8 },
  inputWithRightIcon: { paddingRight: 8 },

  iconLeft: { marginLeft: 12, marginRight: 8 },
  iconRight: { marginRight: 12, marginLeft: 8 },

  clearButton: {
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  clearIcon: {
    fontSize: 20,
    color: "#999",
    lineHeight: 22,
  },
});