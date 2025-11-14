import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Pressable,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chevron } from "../../assets/icons/Chevron";
import { LoginImg } from "../../assets/svgImages/loginImg";
import Input from "../../components/ui/input/input";
import { colorPrimitives } from "../../constants/theme";
import { useAuth } from "../../context/authContext";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
import { secureStorage } from "../../utils/securesStore";
function ChangePasswordScreen() {
  const router = useRouter();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [formData, setFormData] = useState({
    new_password: "",
    new_password_confirmation: "",
  });
  const handleStateChange = (field, value, stateFn) => {
    stateFn((prev) => ({ ...prev, [field]: value }));
  };
  const { handleChangePassword, loading } = useAuth();
  const handleSubmit = async () => {
    const passwordResetToken = await secureStorage.getItem(
      "PASSWORD-RESET-TOKEN"
    );
    await handleChangePassword(router, formData, passwordResetToken);
  };
  return (
    <>
      <SafeAreaView
        style={[
          utilityStyles.flex1,
          utilityStyles.flexCol,
          { backgroundColor: "#ffff" },
        ]}
      >
        <View
          style={[
            utilityStyles.flexCol,
            utilityStyles.gXl,
            { paddingInline: 20, paddingTop: 20 },
          ]}
        >
          <View style={[utilityStyles.w100]}>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.w100,
                utilityStyles.justifyBetween,
              ]}
            >
              <Pressable onPress={() => router.navigate("/PasswordReset")}>
                <Chevron
                  width={24}
                  height={24}
                  color={colorPrimitives.light.colorTextPrimary}
                />
              </Pressable>
              <Text
                style={[
                  utilityStyles.textXl,
                  utilityStyles.fontBold,
                  lightModeStyles.textLight,
                ]}
              >
                Change Password
              </Text>
              <Text></Text>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.justifyCenter,
              utilityStyles.alignCenter,
            ]}
          >
            <View style={{ width: 250, height: 165 }}>
              <LoginImg width={"100%"} height={"100%"} />
            </View>
          </View>
          <View style={[utilityStyles.flexCol, utilityStyles.gLg]}>
            <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
              <Text
                style={[lightModeStyles.textLight, utilityStyles.fontMedium]}
              >
                Password
              </Text>
              <Input
                ref={passwordRef}
                type="password"
                value={formData.new_password}
                onChangeText={(newText) =>
                  handleStateChange("new_password", newText, setFormData)
                }
              />
            </View>
            <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
              <Text
                style={[lightModeStyles.textLight, utilityStyles.fontMedium]}
              >
                Confirm Password
              </Text>
              <Input
                ref={passwordConfirmationRef}
                type="password"
                value={formData.new_password_confirmation}
                onChangeText={(newText) =>
                  handleStateChange(
                    "new_password_confirmation",
                    newText,
                    setFormData
                  )
                }
              />
            </View>
            <TouchableOpacity
              style={[
                lightModeStyles.bgPrimary,
                utilityStyles.w100,
                utilityStyles.roundedCircle,
                {
                  height: 58,
                  padding: 20,
                },
              ]}
              onPress={() => handleSubmit()}
            >
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.gSm,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    lightModeStyles.colorOnPrimary,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Change Password
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
export default ChangePasswordScreen;
