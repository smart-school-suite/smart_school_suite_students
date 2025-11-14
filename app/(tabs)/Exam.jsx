import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Announcement } from "../../assets/icons/Announcement";
import { Arrow } from "../../assets/icons/Arrow";
import { CalendarLine } from "../../assets/icons/CalendarLine";
import { ClockLine } from "../../assets/icons/ClockLine";
import { Dash } from "../../assets/icons/Dash";
import { Level } from "../../assets/icons/Level";
import { Option } from "../../assets/icons/Option";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function ExamScreen() {
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
            <Text
              style={[
                utilityStyles.text4Xl,
                utilityStyles.fontBold,
                lightModeStyles.textLight,
              ]}
            >
              Exams
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                columnGap: 12,
              }}
            >
              <Pressable
                style={[
                  utilityStyles.roundedCircle,
                  lightModeStyles.bgPrimary,
                  utilityStyles.flexCol,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    paddingHorizontal: 16,
                    minWidth: 55,
                    width: "auto",
                    maxWidth: 200,
                    height: 48,
                  },
                ]}
              >
                <Text
                  style={[
                    lightModeStyles.colorOnPrimary,
                    utilityStyles.textXs,
                    utilityStyles.textCenter,
                  ]}
                >
                  All
                </Text>
              </Pressable>
              <Pressable
                style={[
                  utilityStyles.roundedCircle,
                  utilityStyles.bgPrimary100,
                  utilityStyles.flexCol,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    paddingHorizontal: 16,
                    minWidth: 55,
                    width: "auto",
                    maxWidth: 200,
                    height: 48,
                  },
                ]}
              >
                <Text
                  style={[
                    lightModeStyles.colorPrimary,
                    utilityStyles.textXs,
                    utilityStyles.textCenter,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  First Semester
                </Text>
              </Pressable>
              <Pressable
                style={[
                  utilityStyles.roundedCircle,
                  utilityStyles.bgPrimary100,
                  utilityStyles.flexCol,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    paddingHorizontal: 16,
                    minWidth: 55,
                    width: "auto",
                    maxWidth: 200,
                    height: 48,
                  },
                ]}
              >
                <Text
                  style={[
                    lightModeStyles.colorPrimary,
                    utilityStyles.textXs,
                    utilityStyles.textCenter,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Second Semester
                </Text>
              </Pressable>
              <Pressable
                style={[
                  utilityStyles.roundedCircle,
                  utilityStyles.bgPrimary100,
                  utilityStyles.flexCol,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    paddingHorizontal: 16,
                    minWidth: 55,
                    width: "auto",
                    maxWidth: 200,
                    height: 48,
                  },
                ]}
              >
                <Text
                  style={[
                    lightModeStyles.colorPrimary,
                    utilityStyles.textXs,
                    utilityStyles.textCenter,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Third Semester
                </Text>
              </Pressable>
            </ScrollView>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.pSm,
                utilityStyles.roundedXl,
                lightModeStyles.borderColor,
                utilityStyles.gSm,
                { borderWidth: 0.5 },
              ]}
            >
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.gSm,
                ]}
              >
                <View>
                  <Announcement
                    color={colorPrimitives.light.colorTextPrimary}
                    width={24}
                    height={24}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontSemiBold,
                    lightModeStyles.textLight,
                  ]}
                >
                  First Semester CA Results Are Out!
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                    {
                      letterSpacing: 0.2,
                      lineHeight: 20,
                    },
                  ]}
                >
                  Your results are now available. check your performance today!
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  lightModeStyles.bgPrimary,
                  utilityStyles.w100,
                  utilityStyles.roundedCircle,
                  utilityStyles.flexCol,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    height: 50,
                    padding: 12,
                  },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.colorOnPrimary,
                  ]}
                >
                  View Results
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.pSm,
                utilityStyles.roundedXl,
                lightModeStyles.borderColor,
                utilityStyles.gSm,
                { borderWidth: 0.5 },
              ]}
            >
              <View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.w100,
                    utilityStyles.justifyBetween,
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        utilityStyles.textMd,
                        utilityStyles.fontSemiBold,
                        lightModeStyles.textLight,
                      ]}
                    >
                      First Semester Exam
                    </Text>
                  </View>
                  <View>
                    <Option
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.g2Xs,
                  ]}
                >
                  <View>
                    <Level
                      height={18}
                      width={18}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.textSm,
                        utilityStyles.fontMedium,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Software Engineering, Level 100
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 20 },
                  ]}
                >
                  The First Semester CA is a comprehensive test covering all
                  course material taught in the first half of the academic year.
                  It assesses foundational knowledge and prepares students for
                  future topics
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.w100,
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
                      width={18}
                      height={18}
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
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                        ]}
                      >
                        03 Nov 2026
                      </Text>
                      <Dash
                        width={18}
                        height={18}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <Text
                        style={[
                          utilityStyles.fontMedium,
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
                      width={18}
                      height={18}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      14 Days Left
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[
                    utilityStyles.flexCol,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyCenter,
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    { width: 40, height: 40, transform: [{ rotate: "45deg" }] },
                  ]}
                >
                  <Arrow
                    height={18}
                    width={18}
                    color={colorPrimitives.light.colorOnPrimary}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.pSm,
                utilityStyles.roundedXl,
                lightModeStyles.borderColor,
                utilityStyles.gSm,
                { borderWidth: 0.5 },
              ]}
            >
              <View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.w100,
                    utilityStyles.justifyBetween,
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        utilityStyles.textMd,
                        utilityStyles.fontSemiBold,
                        lightModeStyles.textLight,
                      ]}
                    >
                      First Semester Exam
                    </Text>
                  </View>
                  <View>
                    <Option
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.g2Xs,
                  ]}
                >
                  <View>
                    <Level
                      height={18}
                      width={18}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.textSm,
                        utilityStyles.fontMedium,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Software Engineering, Level 100
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 20 },
                  ]}
                >
                  The First Semester CA is a comprehensive test covering all
                  course material taught in the first half of the academic year.
                  It assesses foundational knowledge and prepares students for
                  future topics
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.w100,
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
                      width={18}
                      height={18}
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
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                        ]}
                      >
                        03 Nov 2026
                      </Text>
                      <Dash
                        width={18}
                        height={18}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <Text
                        style={[
                          utilityStyles.fontMedium,
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
                      width={18}
                      height={18}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.textLight,
                      ]}
                    >
                      14 Days Left
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[
                    utilityStyles.flexCol,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyCenter,
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    { width: 40, height: 40, transform: [{ rotate: "45deg" }] },
                  ]}
                >
                  <Arrow
                    height={18}
                    width={18}
                    color={colorPrimitives.light.colorOnPrimary}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.pSm,
                utilityStyles.roundedXl,
                lightModeStyles.borderColor,
                utilityStyles.gSm,
                { borderWidth: 0.5 },
              ]}
            >
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.gSm,
                ]}
              >
                <View>
                  <Announcement
                    color={colorPrimitives.light.colorTextPrimary}
                    width={24}
                    height={24}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontSemiBold,
                    lightModeStyles.textLight,
                  ]}
                >
                  First Semester CA Results Are Out!
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                    {
                      letterSpacing: 0.2,
                      lineHeight: 20,
                    },
                  ]}
                >
                  Your results are now available. check your performance today!
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  lightModeStyles.bgPrimary,
                  utilityStyles.w100,
                  utilityStyles.roundedCircle,
                  utilityStyles.flexCol,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    height: 50,
                    padding: 12,
                  },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.colorOnPrimary,
                  ]}
                >
                  View Results
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ExamScreen;
