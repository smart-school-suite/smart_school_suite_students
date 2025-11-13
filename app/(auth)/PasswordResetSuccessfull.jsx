import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkline } from "../../assets/icons/CheckLine";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function PasswordResetSuccessScreen() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView
        style={[
          utilityStyles.flex1,
          utilityStyles.flexCol,
          utilityStyles.alignCenter,
          utilityStyles.justifyCenter,
          { backgroundColor: "#ffff" },
        ]}
      >
        <View style={[utilityStyles.flexCol, utilityStyles.gMd, utilityStyles.w100, {paddingInline:20}]}>
          <View style={[utilityStyles.flexCol, utilityStyles.gMd, utilityStyles.justifyCenter, utilityStyles.alignCenter]}>
            <Checkline
              width={150}
              height={150}
              color={colorPrimitives.success[400]}
            />
            <Text style={[utilityStyles.colorSuccess400, utilityStyles.fontMedium, utilityStyles.textMd]}>
              Password Reset Successful
            </Text>
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
            onPress={() => router.navigate("/Login")}
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
                Take Me To Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
export default PasswordResetSuccessScreen;
