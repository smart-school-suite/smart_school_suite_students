import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CalendarLine } from "../../assets/icons/CalendarLine";
import { ClockLine } from "../../assets/icons/ClockLine";
import { DashLine } from "../../assets/icons/DashLine";
import { Dot } from "../../assets/icons/Dot";
import { Hash } from "../../assets/icons/Hash";
import { Star } from "../../assets/icons/Star";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function ScheduleScreen() {
  const userImage = require("../../assets/images/user.jpg");
  return (
    <>
      <SafeAreaView
        style={[
          utilityStyles.flex1,
          utilityStyles.flexCol,
          utilityStyles.gMd,
          {
            backgroundColor: "#fff",
          },
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
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.justifyBetween,
              ]}
            >
              <Text
                style={[
                  utilityStyles.text4Xl,
                  utilityStyles.fontBold,
                  lightModeStyles.textLight,
                ]}
              >
                Schedule
              </Text>
              <Pressable
                style={[
                  lightModeStyles.bgLight,
                  utilityStyles.flexRow,
                  utilityStyles.gXs,
                  utilityStyles.roundedCircle,
                  { padding: 16 },
                ]}
              >
                <View>
                  <CalendarLine
                    width={16}
                    height={16}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textXs,
                    lightModeStyles.textLight,
                  ]}
                >
                  January 2025
                </Text>
              </Pressable>
            </View>
            <View style={{ height: 55 }}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{ columnGap: 8, height: 55 }}
              >
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.bgPrimary,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    { width: 45, height: 55 },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.colorOnPrimary,
                    ]}
                  >
                    Mon
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.colorOnPrimary,
                    ]}
                  >
                    17
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Tue
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    18
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Wed
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    19
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Thur
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    20
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Fri
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    21
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Sat
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    22
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Sun
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    23
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Mon
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    24
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Tue
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    25
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Wed
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    25
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Thur
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    18
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Tue
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    18
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Tue
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    18
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Tue
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    18
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.pXs,
                    utilityStyles.flexCol,
                    utilityStyles.gXs,
                    lightModeStyles.borderColor,
                    utilityStyles.alignCenter,
                    utilityStyles.roundedXl,
                    {
                      width: 45,
                      height: 55,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.text2Xs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Tue
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textXs,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    18
                  </Text>
                </Pressable>
              </ScrollView>
            </View>
            <Text
              style={[
                utilityStyles.textMd,
                utilityStyles.fontBold,
                lightModeStyles.textLight,
              ]}
            >
              First Semester Timetable
            </Text>
            {
              [...Array(6)].map((items, index) => (
                 <View style={[utilityStyles.flexCol, utilityStyles.gSm]} key={index}>
              <View style={[utilityStyles.flexRow, utilityStyles.alignCenter, utilityStyles.w100]}>
                <View
                  style={[
                    utilityStyles.flexCol,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyCenter,
                    utilityStyles.gXs,
                    utilityStyles.w10
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.textXs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    10:00
                  </Text>
                  <DashLine color={colorPrimitives.light.colorTextPrimary}/>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.textXs,
                      lightModeStyles.textLight,
                    ]}
                  >
                    11:30
                  </Text>
                </View>
                <View
                  style={[
                    utilityStyles.roundedXl,
                    utilityStyles.pMd,
                    utilityStyles.flexCol,
                    utilityStyles.gLg,
                    lightModeStyles.borderColor,
                    utilityStyles.w90,
                    { backgroundColor: "#fff", borderWidth: 0.5 },
                  ]}
                >
                  <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                    <View
                      style={[
                        utilityStyles.bgPrimary100,
                        utilityStyles.roundedCircle,
                        utilityStyles.justifyCenter,
                        utilityStyles.alignCenter,
                        utilityStyles.flexCol,
                        { minWidth: 75, width: 50, height: 20 },
                      ]}
                    >
                      <Text
                        style={[
                          utilityStyles.textXs,
                          utilityStyles.fontMedium,
                          utilityStyles.colorPrimary400,
                        ]}
                      >
                        Theoritical
                      </Text>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                      ]}
                    >
                      <View>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textMd,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Calculus I
                        </Text>
                      </View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.bgSuccess100,
                          utilityStyles.roundedSm,
                          { padding: 4 },
                        ]}
                      >
                        <View>
                          <Dot color={colorPrimitives.success[400]} />
                        </View>
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            utilityStyles.colorSuccess400,
                          ]}
                        >
                          InProgress
                        </Text>
                      </View>
                    </View>
                    <View
                    style={[utilityStyles.flexRow, utilityStyles.alignCenter]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.g2Xs,
                      ]}
                    >
                      <View>
                        <Star height={20} width={20}/>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        3 Credit
                      </Text>
                    </View>
                    <View>
                      <Dot />
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.g2Xs,
                      ]}
                    >
                      <View>
                        <Hash height={20} width={20}/>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                       SWE001
                      </Text>
                    </View>
                   </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.justifyBetween,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.gXs,
                      ]}
                    >
                      <Image
                        source={userImage}
                        style={{ width: 35, height: 35, borderRadius: 5 }}
                      />
                      <Text
                        style={[
                          lightModeStyles.textLight,
                          utilityStyles.textSm,
                          utilityStyles.fontMedium,
                        ]}
                      >
                        Dr. Alex Johnson
                      </Text>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.g2Xs,
                      ]}
                    >
                      <View>
                        <ClockLine height={20} width={20}/>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        2h 30Min
                      </Text>
                    </View>
                  </View>
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
export default ScheduleScreen;
