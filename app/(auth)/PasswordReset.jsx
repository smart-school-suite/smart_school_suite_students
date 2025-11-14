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
import Input from "../../components/ui/input/input";
import { colorPrimitives } from "../../constants/theme";
import { useAuth } from "../../context/authContext";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function PasswordResetScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const emailRef = useRef();
  const { handlePasswordReset, loading } = useAuth();
  const handleSubmit = async() => {
        await handlePasswordReset(router, email);
  }
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
                Password Reset
              </Text>
              <Text></Text>
            </View>
          </View>
          <View style={[utilityStyles.flexCol, utilityStyles.gMd]}>
            <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
              <Text
                style={[lightModeStyles.textLight, utilityStyles.fontMedium]}
              >
                Email
              </Text>
              <Input
                ref={emailRef}
                type="email"
                value={email}
                onChangeText={setEmail}
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
                  Request Verification Code
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
export default PasswordResetScreen;
