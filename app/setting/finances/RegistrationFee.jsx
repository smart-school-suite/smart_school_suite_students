import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../assets/icons/Back";
import { CalendarLine } from "../../../assets/icons/CalendarLine";
import { CheckFilled } from "../../../assets/icons/CheckFilled";
import { CheckLine } from "../../../assets/icons/CheckLine";
import { Dot } from "../../../assets/icons/Dot";
import { Level } from "../../../assets/icons/Level";
import { colorPrimitives } from "../../../constants/theme";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function RegistrationFeeScreen() {
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
                Registration Fee
              </Text>
            </View>
            <View
              style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}
            >
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
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
                    Registration Fee Level 100
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.g2Xs,
                  ]}
                >
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.g2Xs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <Level
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Software Engineering
                    </Text>
                  </View>
                  <View>
                    <Dot
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Level 200
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                    {
                      lineHeight: 20,
                    },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis nesciunt fuga, numquam quia atque esse
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignEnd,
                  utilityStyles.justifyBetween,
                ]}
              >
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
                    Date Incurred: 10 Dec 2026
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textLg,
                      lightModeStyles.textLight,
                    ]}
                  >
                    65,000 ₣
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}
            >
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
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
                    Registration Fee Level 100
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.g2Xs,
                  ]}
                >
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.g2Xs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <Level
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Software Engineering
                    </Text>
                  </View>
                  <View>
                    <Dot
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Level 200
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                    {
                      lineHeight: 20,
                    },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis nesciunt fuga, numquam quia atque esse
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignEnd,
                  utilityStyles.justifyBetween,
                ]}
              >
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
                    Date Incurred: 10 Dec 2026
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textLg,
                      lightModeStyles.textLight,
                    ]}
                  >
                    65,000 ₣
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}
            >
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
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
                    Registration Fee Level 100
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.g2Xs,
                  ]}
                >
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.g2Xs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <Level
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Software Engineering
                    </Text>
                  </View>
                  <View>
                    <Dot
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Level 200
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                    {
                      lineHeight: 20,
                    },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis nesciunt fuga, numquam quia atque esse
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignEnd,
                  utilityStyles.justifyBetween,
                ]}
              >
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
                    Date Incurred: 10 Dec 2026
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textLg,
                      lightModeStyles.textLight,
                    ]}
                  >
                    65,000 ₣
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}
            >
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
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
                    Registration Fee Level 100
                  </Text>
                  <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
                    <CheckFilled
                      width={16}
                      height={16}
                      color={colorPrimitives.success[400]}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        { color: colorPrimitives.success[400] },
                      ]}
                    >
                      Paid
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.g2Xs,
                  ]}
                >
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.g2Xs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <Level
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Software Engineering
                    </Text>
                  </View>
                  <View>
                    <Dot
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Level 200
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                    {
                      lineHeight: 20,
                    },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis nesciunt fuga, numquam quia atque esse
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignEnd,
                  utilityStyles.justifyBetween,
                ]}
              >
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
                    Date Incurred: 10 Dec 2026
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textLg,
                      lightModeStyles.textLight,
                    ]}
                  >
                    65,000 ₣
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default RegistrationFeeScreen;
