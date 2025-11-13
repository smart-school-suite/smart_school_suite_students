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
import StepInput from "../../components/ui/input/stepInput";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function LoginOtpScreen() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const stepInputRef = useRef(null);
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
              <Pressable onPress={() => router.navigate("/Login")}>
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
                Verify Account
              </Text>
              <Text></Text>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexCol,
              utilityStyles.alignCenter,
              utilityStyles.justifyCenter,
              utilityStyles.w100,
              utilityStyles.gLg,
            ]}
          >
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gMd,
                utilityStyles.alignCenter,
                utilityStyles.justifyCenter,
              ]}
            >
              <View>
                <View style={[utilityStyles.flexRow, { gap: 8 }]}>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Code Has Been Sent to
                  </Text>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      lightModeStyles.colorPrimary,
                    ]}
                  >
                    example@gmail.com
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      { textAlign: "center" },
                    ]}
                  >
                    Enter the code to verify your account
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                    { textAlign: "center" },
                  ]}
                >
                  Enter Code
                </Text>
              </View>
              <StepInput
                ref={stepInputRef}
                length={6}
                value={code}
                onChange={setCode}
                secureTextEntry={false}
                keyboardType="numeric"
              />
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  { gap: 8 },
                ]}
              >
                <Text
                  style={[utilityStyles.fontMedium, lightModeStyles.textLight]}
                >
                  Didn't Recieve Any Code?
                </Text>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    lightModeStyles.colorPrimary,
                  ]}
                >
                  Resend Code
                </Text>
              </View>
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
              onPress={() => router.navigate("/Home")}
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
                  Verify
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
export default LoginOtpScreen;
