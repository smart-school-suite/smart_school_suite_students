import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AlertLine } from "../../assets/icons/AlertLine";
import { Arrow } from "../../assets/icons/Arrow";
import { BellLine } from "../../assets/icons/BellLine";
import { CalendarLine } from "../../assets/icons/CalendarLine";
import { ClockLine } from "../../assets/icons/ClockLine";
import { Dash } from "../../assets/icons/Dash";
import { HeartLine } from "../../assets/icons/HeartLine";
import { Important } from "../../assets/icons/ImportantLine";
import { InfoLine } from "../../assets/icons/InfoLine";
import { Location } from "../../assets/icons/Location";
import { MenuFilled } from "../../assets/icons/MenuFilled";
import { SettingLine } from "../../assets/icons/SettingLine";
import { UserLine } from "../../assets/icons/UserLine";
import { ExamCardImg } from "../../assets/svgImages/examCardImg";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function HomeScreen() {
  const userImage = require("../../assets/images/user.jpg");
  const eventImage = require("../../assets/images/event-img.jpg");
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
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.w100,
                utilityStyles.alignCenter,
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
                <Image
                  source={userImage}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    borderRadius: 999,
                  }}
                />
                <View style={[utilityStyles.flexCol]}>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Chongong P
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontSemiBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Engineering Level 100
                  </Text>
                </View>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.gSm,
                ]}
              >
                <Pressable
                  style={[
                    utilityStyles.relative,
                    utilityStyles.flexCol,
                    utilityStyles.alignCenter,
                    { width: 40, height: 40 },
                  ]}
                >
                  <View
                    style={[
                      utilityStyles.absolute,
                      utilityStyles.bgSuccess400,
                      {
                        width: 10,
                        height: 10,
                        zIndex: 999,
                        top: 0,
                        right: 10,
                        borderRadius: 999,
                      },
                    ]}
                  ></View>
                  <BellLine
                    width={24}
                    height={24}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </Pressable>
                <Pressable
                  style={[
                    utilityStyles.relative,
                    utilityStyles.flexCol,
                    utilityStyles.alignCenter,
                    { width: 40, height: 40 },
                  ]}
                >
                  <SettingLine
                    width={24}
                    height={24}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </Pressable>
              </View>
            </View>
            <View>
              <Text
                style={[
                  utilityStyles.text4Xl,
                  utilityStyles.fontBold,
                  lightModeStyles.textLight,
                ]}
              >
                ₣ 25,000
              </Text>
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
            <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
              <Text
                style={[
                  utilityStyles.fontBold,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                First Semester Timetable
              </Text>
              <View style={{ maxHeight: 200, height: "auto" }}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={{
                    columnGap: 12,
                    maxHeight: 200,
                    height: "auto",
                  }}
                >
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      utilityStyles.bgPrimary50,
                      {
                        borderWidth: 0.5,
                        width: 325,
                        maxHeight: 200,
                        height: "auto",
                      },
                    ]}
                  >
                    <View style={[utilityStyles.flexCol]}>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.justifyBetween,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Introduction To Software Engineering
                        </Text>
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <View
                            style={[
                              utilityStyles.roundedCircle,
                              {
                                backgroundColor: colorPrimitives.danger[300],
                                width: 5,
                                height: 5,
                              },
                            ]}
                          ></View>
                          <Text
                            style={[
                              utilityStyles.fontRegular,
                              utilityStyles.text2Xs,
                              lightModeStyles.textLight,
                            ]}
                          >
                            ongoing
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontRegular,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        SWE005
                      </Text>
                    </View>
                    <View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <UserLine
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Dr. Jhone Doe
                        </Text>
                      </View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <Location
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Hall One
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.gXs,
                      ]}
                    >
                      <ClockLine
                        width={14}
                        height={14}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          7:30 AM
                        </Text>
                        <Dash
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          10:30 AM ,
                        </Text>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        2h 30 Min
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      {
                        borderWidth: 0.5,
                        width: 325,
                        maxHeight: 200,
                        height: "auto",
                        backgroundColor: "#fff",
                      },
                    ]}
                  >
                    <View style={[utilityStyles.flexCol]}>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.justifyBetween,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Introduction To Software Engineering
                        </Text>
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <View
                            style={[
                              utilityStyles.roundedCircle,
                              {
                                backgroundColor: colorPrimitives.danger[300],
                                width: 5,
                                height: 5,
                              },
                            ]}
                          ></View>
                          <Text
                            style={[
                              utilityStyles.fontRegular,
                              utilityStyles.text2Xs,
                              lightModeStyles.textLight,
                            ]}
                          >
                            ongoing
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontRegular,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        SWE005
                      </Text>
                    </View>
                    <View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <UserLine
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Dr. Jhone Doe
                        </Text>
                      </View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <Location
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Hall One
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.gXs,
                      ]}
                    >
                      <ClockLine
                        width={14}
                        height={14}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          7:30 AM
                        </Text>
                        <Dash
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          10:30 AM ,
                        </Text>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        2h 30 Min
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      {
                        borderWidth: 0.5,
                        width: 325,
                        maxHeight: 200,
                        height: "auto",
                        backgroundColor: "#fff",
                      },
                    ]}
                  >
                    <View style={[utilityStyles.flexCol]}>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.justifyBetween,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Introduction To Software Engineering
                        </Text>
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <View
                            style={[
                              utilityStyles.roundedCircle,
                              {
                                backgroundColor: colorPrimitives.danger[300],
                                width: 5,
                                height: 5,
                              },
                            ]}
                          ></View>
                          <Text
                            style={[
                              utilityStyles.fontRegular,
                              utilityStyles.text2Xs,
                              lightModeStyles.textLight,
                            ]}
                          >
                            ongoing
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontRegular,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        SWE005
                      </Text>
                    </View>
                    <View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <UserLine
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Dr. Jhone Doe
                        </Text>
                      </View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <Location
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Hall One
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.gXs,
                      ]}
                    >
                      <ClockLine
                        width={14}
                        height={14}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          7:30 AM
                        </Text>
                        <Dash
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          10:30 AM ,
                        </Text>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        2h 30 Min
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      {
                        borderWidth: 0.5,
                        width: 325,
                        maxHeight: 200,
                        height: "auto",
                        backgroundColor: "#fff",
                      },
                    ]}
                  >
                    <View style={[utilityStyles.flexCol]}>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.justifyBetween,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Introduction To Software Engineering
                        </Text>
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <View
                            style={[
                              utilityStyles.roundedCircle,
                              {
                                backgroundColor: colorPrimitives.danger[300],
                                width: 5,
                                height: 5,
                              },
                            ]}
                          ></View>
                          <Text
                            style={[
                              utilityStyles.fontRegular,
                              utilityStyles.text2Xs,
                              lightModeStyles.textLight,
                            ]}
                          >
                            ongoing
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontRegular,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        SWE005
                      </Text>
                    </View>
                    <View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <UserLine
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Dr. Jhone Doe
                        </Text>
                      </View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <Location
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Hall One
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.gXs,
                      ]}
                    >
                      <ClockLine
                        width={14}
                        height={14}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          7:30 AM
                        </Text>
                        <Dash
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          10:30 AM ,
                        </Text>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        2h 30 Min
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      {
                        borderWidth: 0.5,
                        width: 325,
                        maxHeight: 200,
                        height: "auto",
                        backgroundColor: "#fff",
                      },
                    ]}
                  >
                    <View style={[utilityStyles.flexCol]}>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.justifyBetween,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Introduction To Software Engineering
                        </Text>
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <View
                            style={[
                              utilityStyles.roundedCircle,
                              {
                                backgroundColor: colorPrimitives.danger[300],
                                width: 5,
                                height: 5,
                              },
                            ]}
                          ></View>
                          <Text
                            style={[
                              utilityStyles.fontRegular,
                              utilityStyles.text2Xs,
                              lightModeStyles.textLight,
                            ]}
                          >
                            ongoing
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontRegular,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        SWE005
                      </Text>
                    </View>
                    <View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <UserLine
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Dr. Jhone Doe
                        </Text>
                      </View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.gXs,
                          utilityStyles.alignCenter,
                        ]}
                      >
                        <Location
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Hall One
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.gXs,
                      ]}
                    >
                      <ClockLine
                        width={14}
                        height={14}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          7:30 AM
                        </Text>
                        <Dash
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontMedium,
                            utilityStyles.textXs,
                            lightModeStyles.textLight,
                          ]}
                        >
                          10:30 AM ,
                        </Text>
                      </View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        2h 30 Min
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
              <Text
                style={[
                  utilityStyles.fontBold,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                Announcement
              </Text>
              <View style={{ maxHeight: 200, height: "auto" }}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={{
                    columnGap: 8,
                    maxHeight: 200,
                    height: "auto",
                  }}
                >
                  <Pressable
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gMd,
                      utilityStyles.alignCenter,
                      utilityStyles.justifyCenter,
                      utilityStyles.pSm,
                      lightModeStyles.bgPrimary,
                      lightModeStyles.colorOnPrimary,
                      utilityStyles.roundedCircle,
                      {
                        width: "auto",
                        maxWidth: 120,
                      },
                    ]}
                  >
                    <View>
                      <MenuFilled
                        width={16}
                        height={16}
                        color={colorPrimitives.light.colorOnPrimary}
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          lightModeStyles.colorOnPrimary,
                        ]}
                      >
                        General
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gMd,
                      utilityStyles.alignCenter,
                      utilityStyles.justifyCenter,
                      utilityStyles.pSm,
                      utilityStyles.bgPrimary50,
                      utilityStyles.roundedCircle,
                      {
                        width: "auto",
                        maxWidth: 120,
                      },
                    ]}
                  >
                    <View>
                      <Important
                        width={16}
                        height={16}
                        color={colorPrimitives.primary[400]}
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          utilityStyles.colorPrimary400,
                        ]}
                      >
                        Important
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gMd,
                      utilityStyles.alignCenter,
                      utilityStyles.justifyCenter,
                      utilityStyles.pSm,
                      utilityStyles.bgPrimary50,
                      utilityStyles.roundedCircle,
                      {
                        width: "auto",
                        maxWidth: 120,
                      },
                    ]}
                  >
                    <View>
                      <AlertLine
                        width={16}
                        height={16}
                        color={colorPrimitives.primary[400]}
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          utilityStyles.colorPrimary400,
                        ]}
                      >
                        Urgent
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gMd,
                      utilityStyles.alignCenter,
                      utilityStyles.justifyCenter,
                      utilityStyles.pSm,
                      utilityStyles.bgPrimary50,
                      utilityStyles.roundedCircle,
                      {
                        width: "auto",
                        maxWidth: 120,
                      },
                    ]}
                  >
                    <View>
                      <InfoLine
                        width={16}
                        height={16}
                        color={colorPrimitives.primary[400]}
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          utilityStyles.colorPrimary400,
                        ]}
                      >
                        Info
                      </Text>
                    </View>
                  </Pressable>
                </ScrollView>
              </View>
              <View style={{ maxHeight: 200, height: "auto" }}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={{
                    columnGap: 12,
                    maxHeight: 200,
                    height: "auto",
                  }}
                >
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      utilityStyles.bgPrimary50,
                      {
                        borderWidth: 0.5,
                        width: 365,
                        maxHeight: 200,
                        height: "auto",
                        backgroundColor: "#fff",
                      },
                    ]}
                  >
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontSemiBold,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                        ]}
                      >
                        Science Fair Scheduled for Next Week
                      </Text>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        {" "}
                        23 Jan 2026, 8:00 AM
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                          {
                            letterSpacing: 0.2,
                            lineHeight: 20,
                          },
                        ]}
                      >
                        The annual school science fair will be held on March
                        15th in the auditorium. Students are encouraged to
                        showcase their projects and innovations. Judges from
                        local universities will be present
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      utilityStyles.bgPrimary50,
                      {
                        borderWidth: 0.5,
                        width: 365,
                        maxHeight: 200,
                        height: "auto",
                        backgroundColor: "#fff",
                      },
                    ]}
                  >
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontBold,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                        ]}
                      >
                        Science Fair Scheduled for Next Week
                      </Text>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        {" "}
                        23 Jan 2026, 8:00 AM
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                          {
                            letterSpacing: 0.2,
                            lineHeight: 20,
                          },
                        ]}
                      >
                        The annual school science fair will be held on March
                        15th in the auditorium. Students are encouraged to
                        showcase their projects and innovations. Judges from
                        local universities will be present
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.gMd,
                      utilityStyles.pSm,
                      utilityStyles.roundedXl,
                      lightModeStyles.borderColor,
                      utilityStyles.bgPrimary50,
                      {
                        borderWidth: 0.5,
                        width: 365,
                        maxHeight: 200,
                        height: "auto",
                        backgroundColor: "#fff",
                      },
                    ]}
                  >
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontBold,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                        ]}
                      >
                        Science Fair Scheduled for Next Week
                      </Text>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                        ]}
                      >
                        {" "}
                        23 Jan 2026, 8:00 AM
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textXs,
                          lightModeStyles.textLight,
                          {
                            letterSpacing: 0.2,
                            lineHeight: 20,
                          },
                        ]}
                      >
                        The annual school science fair will be held on March
                        15th in the auditorium. Students are encouraged to
                        showcase their projects and innovations. Judges from
                        local universities will be present
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gXs,
                utilityStyles.w100,
              ]}
            >
              <Text
                style={[
                  utilityStyles.fontBold,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                Upcoming Exams
              </Text>
              <View
                style={[
                  utilityStyles.roundedLg,
                  {
                    width: "100%",
                    height: "auto",
                    maxHeight: 250,
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                    resizeMode: "cover",
                  },
                ]}
              >
                <ExamCardImg width={"105%"} height={"100%"} />
                <View
                  style={[
                    utilityStyles.flexCol,
                    utilityStyles.gMd,
                    { position: "absolute", zIndex: 999, padding: 16 },
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textSm,
                      lightModeStyles.textLight,
                    ]}
                  >
                    First Semester Exam
                  </Text>
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                        {
                          letterSpacing: 0.2,
                          lineHeight: 20,
                        },
                      ]}
                    >
                      The First Semester Exam is a comprehensive test covering
                      all course material taught in the first half of
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Software Engineering
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Level 100
                    </Text>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.justifyBetween,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <View style={[utilityStyles.flexCol, { gap: 4 }]}>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <CalendarLine
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <Text
                            style={[
                              utilityStyles.fontRegular,
                              utilityStyles.textSm,
                              lightModeStyles.textLight,
                            ]}
                          >
                            03 Nov 2026
                          </Text>
                          <Dash
                            width={14}
                            height={14}
                            color={colorPrimitives.light.colorTextPrimary}
                          />
                          <Text
                            style={[
                              utilityStyles.fontRegular,
                              utilityStyles.textSm,
                              lightModeStyles.textLight,
                            ]}
                          >
                            15 Nov 2026
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <ClockLine
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          14 Days Left
                        </Text>
                      </View>
                    </View>
                    <Pressable
                      style={[
                        utilityStyles.flexCol,
                        utilityStyles.alignCenter,
                        utilityStyles.roundedCircle,
                        utilityStyles.justifyCenter,
                        { width: 45, height: 45, backgroundColor: "#fff" },
                      ]}
                    >
                      <View style={{ transform: [{ rotate: "45deg" }] }}>
                        <Arrow
                          width={14}
                          height={14}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gXs,
                utilityStyles.w100,
              ]}
            >
              <Text
                style={[
                  utilityStyles.fontBold,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                Elections
              </Text>
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
                <Text
                  style={[
                    utilityStyles.fontSemiBold,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                  ]}
                >
                  Student Union Government Election
                </Text>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                    {
                      letterSpacing: 0.2,
                      lineHeight: 20,
                    },
                  ]}
                >
                  Exciting News! The window is now open for you to submit your
                  candidacy. Don't miss this chance to be part of our upcoming
                  election—step up, get involved, and make your voice heard!
                </Text>
                <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                  <Text
                    style={[
                      utilityStyles.fontRegular,
                      utilityStyles.textSm,
                      lightModeStyles.textLight,
                      {
                        letterSpacing: 0.2,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Application Window Period
                  </Text>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View>
                      <CalendarLine
                        width={14}
                        height={14}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.gXs,
                      ]}
                    >
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                          {
                            letterSpacing: 0.2,
                            lineHeight: 20,
                          },
                        ]}
                      >
                        Jan 24 2026
                      </Text>
                      <Dash
                        width={14}
                        height={14}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                          {
                            letterSpacing: 0.2,
                            lineHeight: 20,
                          },
                        ]}
                      >
                        Jan 30 2026
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[utilityStyles.w100, utilityStyles.justifyEnd]}>
                  <TouchableOpacity
                    style={[
                      lightModeStyles.bgPrimary,
                      utilityStyles.roundedCircle,
                      { paddingVertical: 16, paddingHorizontal: 4 },
                    ]}
                  >
                    <Text
                      style={[
                        lightModeStyles.colorOnPrimary,
                        utilityStyles.fontMedium,
                        utilityStyles.textXs,
                        utilityStyles.textCenter,
                      ]}
                    >
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gXs,
                utilityStyles.w100,
              ]}
            >
              <Text
                style={[
                  utilityStyles.fontBold,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                School Events
              </Text>
              <ScrollView horizontal={true} contentContainerStyle={{
                    columnGap: 12
                  }}>
                <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                <Image 
                  source={eventImage}
                  style={{width:"100%",  height:300, borderRadius:24}}
                />
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Cultural Week Activities
                    </Text>
                    <View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <View>
                          <CalendarLine
                            width={14}
                            height={14}
                            color={colorPrimitives.light.colorTextPrimary}
                          />
                        </View>
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <Text
                            style={[
                              utilityStyles.fontMedium,
                              utilityStyles.textSm,
                              lightModeStyles.textLight,
                              {
                                letterSpacing: 0.2,
                                lineHeight: 20,
                              },
                            ]}
                          >
                            Jan 24 2026
                          </Text>
                          <Dash
                            width={14}
                            height={14}
                            color={colorPrimitives.light.colorTextPrimary}
                          />
                          <Text
                            style={[
                              utilityStyles.fontMedium,
                              utilityStyles.textSm,
                              lightModeStyles.textLight,
                              {
                                letterSpacing: 0.2,
                                lineHeight: 20,
                              },
                            ]}
                          >
                            Jan 30 2026
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gXs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <Text style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}>200</Text>
                    <HeartLine   width={24}
                            height={24}
                            color={colorPrimitives.light.colorTextPrimary}/>
                  </View>
                </View>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                <Image 
                  source={eventImage}
                  style={{width:"100%",  height:300, borderRadius:24}}
                />
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Cultural Week Activities
                    </Text>
                    <View>
                      <View
                        style={[
                          utilityStyles.flexRow,
                          utilityStyles.alignCenter,
                          utilityStyles.gXs,
                        ]}
                      >
                        <View>
                          <CalendarLine
                            width={14}
                            height={14}
                            color={colorPrimitives.light.colorTextPrimary}
                          />
                        </View>
                        <View
                          style={[
                            utilityStyles.flexRow,
                            utilityStyles.alignCenter,
                            utilityStyles.g2Xs,
                          ]}
                        >
                          <Text
                            style={[
                              utilityStyles.fontMedium,
                              utilityStyles.textSm,
                              lightModeStyles.textLight,
                              {
                                letterSpacing: 0.2,
                                lineHeight: 20,
                              },
                            ]}
                          >
                            Jan 24 2026
                          </Text>
                          <Dash
                            width={14}
                            height={14}
                            color={colorPrimitives.light.colorTextPrimary}
                          />
                          <Text
                            style={[
                              utilityStyles.fontMedium,
                              utilityStyles.textSm,
                              lightModeStyles.textLight,
                              {
                                letterSpacing: 0.2,
                                lineHeight: 20,
                              },
                            ]}
                          >
                            Jan 30 2026
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.gXs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <Text style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}>200</Text>
                    <HeartLine   width={24}
                            height={24}
                            color={colorPrimitives.light.colorTextPrimary}/>
                  </View>
                </View>
              </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default HomeScreen;
