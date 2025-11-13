import { forwardRef, memo, useCallback, useMemo } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const Button = forwardRef((props, ref) => {
  const {
    title,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = "",
    testID,
    accessibilityLabel,
    onPress,
  } = props;

  const handlePress = useCallback(
    (e) => {
      if (!disabled && !loading && onPress) onPress(e);
    },
    [disabled, loading, onPress]
  );

  const leftIconEl = useMemo(
    () => leftIcon && <View style={utilityStyles.mR2}>{leftIcon}</View>,
    [leftIcon]
  );
  const rightIconEl = useMemo(
    () => rightIcon && <View style={utilityStyles.mL2}>{rightIcon}</View>,
    [rightIcon]
  );

  return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.7}
        onPress={handlePress}
        disabled={disabled || loading}
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityRole="button"
        accessibilityState={{ disabled: disabled || loading, busy: loading }}
        testID={testID}
        style={[containerStyle, style]} // `style` prop wins
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={
              variant === "outline" || variant === "ghost"
                ? colorPrimitives.primary[300]
                : "#FFFFFF"
            }
          />
        ) : (
          <>
            {leftIconEl}
            <Text style={textStyle}>{title}</Text>
            {rightIconEl}
          </>
        )}
      </TouchableOpacity>
  );
});

export default memo(Button)