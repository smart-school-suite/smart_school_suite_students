import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../assets/icons/Back";
import { CalendarLineCancel } from "../../../assets/icons/CalendarCancelLine";
import { CalendarLine } from "../../../assets/icons/CalendarLine";
import { CheckLine } from "../../../assets/icons/CheckLine";
import { ClockLine } from "../../../assets/icons/ClockLine";
import { PaidLine } from "../../../assets/icons/PaidLine";
import { PendingFilled } from "../../../assets/icons/PendingFilled";
import { colorPrimitives } from "../../../constants/theme";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function AdditionalFeeScreen() {
    const router = useRouter();
  return (
    <>
      <SafeAreaView
        style={[
          utilityStyles.flex1,
          utilityStyles.flexCol,
          lightModeStyles.bgSurface,
          utilityStyles.gMd,
        ]}
      >
        <ScrollView>
          <View
            style={[
              utilityStyles.flex1,
              utilityStyles.flexCol,
              utilityStyles.gMd,
              { paddingInline: 20, paddingTop: 10 },
            ]}
          >
            <Pressable onPress={() => router.push("/setting")}>
              <Back
                width={24}
                height={24}
                color={colorPrimitives.light.colorTextPrimary}
              />
            </Pressable>
            <View>
              <Text
                style={[
                  utilityStyles.text4Xl,
                  utilityStyles.fontBold,
                  lightModeStyles.textLight,
                ]}
              >
                Additional Fees
              </Text>
            </View>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.bgPrimary100,
                utilityStyles.roundedCircle,
                { padding: 5, width: "100%" },
              ]}
            >
              <Pressable
                style={[
                  utilityStyles.roundedCircle,
                  lightModeStyles.bgPrimary,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                  { paddingHorizontal: 16, height: 45, width: "33%" },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.colorOnPrimary,
                  ]}
                >
                  Unpaid
                </Text>
                <View>
                  <PendingFilled
                    width={20}
                    height={20}
                    color={colorPrimitives.light.colorOnPrimary}
                  />
                </View>
              </Pressable>
              <Pressable
                style={[
                  utilityStyles.roundedCircle,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                  { paddingHorizontal: 16, height: 45, width: "33%" },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Due
                </Text>
                <View>
                  <CalendarLineCancel
                    width={20}
                    height={20}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </View>
              </Pressable>
              <Pressable
                style={[
                  utilityStyles.roundedCircle,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                  { paddingHorizontal: 16, height: 45, width: "33%" },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Paid
                </Text>
                <View>
                  <PaidLine
                    width={20}
                    height={20}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </View>
              </Pressable>
            </View>
           {
             [...Array(10)].map((items, index) => (
                <View
              style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}
              key={index}
            >
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.alignCenter,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.fontSemiBold,
                    utilityStyles.textMd,
                    lightModeStyles.textLight,
                  ]}
                >
                  Student Identity Card
                </Text>
                <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
                  <CheckLine
                    width={16}
                    height={16}
                    color={colorPrimitives.info[400]}
                  />
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.textSm,
                      { color: colorPrimitives.info[400] },
                    ]}
                  >
                    Unpaid
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                    { lineHeight: 20, letterSpacing: 0.25 },
                  ]}
                >
                  This is the first installment fee for the first semester, due
                  before the specified deadline.
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.g2Xs,
                  utilityStyles.alignEnd,
                  utilityStyles.justifyBetween,
                ]}
              >
                <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gXs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <ClockLine
                      width={16}
                      height={16}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      10 Days Left
                    </Text>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gXs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <CalendarLine
                      width={16}
                      height={16}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Due Date: 10 Dec 2026
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textLg,
                      lightModeStyles.textLight,
                    ]}
                  >
                    40,000 ₣
                  </Text>
                </View>
              </View>
            </View>
             ))
           }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default AdditionalFeeScreen;
