import { TextInput } from "react-native";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function Input() {
  return (
    <>
      <TextInput
        placeholder="example@gmail.com"
        placeholderTextColor="#999"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoComplete="email"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        style={[
          utilityStyles.pMd,
          lightModeStyles.borderColor,
          utilityStyles.textSm,
          lightModeStyles.bgLight,
          utilityStyles.roundedLg,
          {
            height: 56,
            borderWidth: 0.5,
            borderColor: "#ccc",
            color: "#555",
          },
        ]}
      />
    </>
  );
}
