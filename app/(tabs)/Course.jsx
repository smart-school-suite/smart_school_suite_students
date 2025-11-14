import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dot } from "../../assets/icons/Dot";
import { Hash } from "../../assets/icons/Hash";
import { Option } from "../../assets/icons/Option";
import { Star } from "../../assets/icons/Star";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function CourseScreen() {
  const userImage = require("../../assets/images/user.jpg");
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
            <Text
              style={[
                utilityStyles.text4Xl,
                utilityStyles.fontBold,
                lightModeStyles.textLight,
              ]}
            >
              Courses
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
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textMd,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  First Semester
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
                <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                  <View
                    style={[
                      utilityStyles.bgPrimary100,
                      utilityStyles.roundedCircle,
                      utilityStyles.justifyCenter,
                      utilityStyles.alignCenter,
                      utilityStyles.flexCol,
                      { minWidth: 75, width: 50, height: 25 },
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
                        Engineering Mathematics
                      </Text>
                    </View>
                    <View>
                      <Option
                        width={20}
                        height={20}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                    </View>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.g2Xs,
                      ]}
                    >
                      <View>
                        <Star
                          height={20}
                          width={20}
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
                        3 Credit
                      </Text>
                    </View>
                    <View>
                      <Dot color={colorPrimitives.light.colorTextPrimary} />
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.g2Xs,
                      ]}
                    >
                      <View>
                        <Hash
                          height={20}
                          width={20}
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
                        SWE001
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      {
                        letterSpacing: 0.2,
                        lineHeight: 20,
                      },
                    ]}
                  >
                    Fundamentals of programming concepts using Python, including
                    variables, control structures, and basic algorithms
                  </Text>
                </View>
                <View>
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
                    <View style={[utilityStyles.flexCol]}>
                      <Text
                        style={[
                          lightModeStyles.textLight,
                          utilityStyles.textSm,
                          utilityStyles.fontMedium,
                        ]}
                      >
                        Dr. Alex Johnson
                      </Text>
                      <Text
                        style={[
                          lightModeStyles.textLight,
                          utilityStyles.textSm,
                          utilityStyles.fontMedium,
                        ]}
                      >
                        Bachelor's Degree
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default CourseScreen;
