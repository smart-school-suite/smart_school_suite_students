import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Option } from "../../assets/icons/Option";
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontSemiBold,
                    ]}
                  >
                    Engineering Mathematics
                  </Text>
                  <View>
                    <Option
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    SWE001
                  </Text>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    3 Credit
                  </Text>
                </View>
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
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      { letterSpacing: 0.2, lineHeight: 20 },
                    ]}
                  >
                    Fundamentals of programming concepts using Python, including
                    variables, control structures, and basic algorithms...
                  </Text>
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontSemiBold,
                    ]}
                  >
                    Engineering Mathematics
                  </Text>
                  <View>
                    <Option
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    SWE001
                  </Text>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    3 Credit
                  </Text>
                </View>
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
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      { letterSpacing: 0.2, lineHeight: 20 },
                    ]}
                  >
                    Fundamentals of programming concepts using Python, including
                    variables, control structures, and basic algorithms...
                  </Text>
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontSemiBold,
                    ]}
                  >
                    Engineering Mathematics
                  </Text>
                  <View>
                    <Option
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    SWE001
                  </Text>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    3 Credit
                  </Text>
                </View>
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
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      { letterSpacing: 0.2, lineHeight: 20 },
                    ]}
                  >
                    Fundamentals of programming concepts using Python, including
                    variables, control structures, and basic algorithms...
                  </Text>
                </View>
              </View>
            </View>
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontSemiBold,
                    ]}
                  >
                    Engineering Mathematics
                  </Text>
                  <View>
                    <Option
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    SWE001
                  </Text>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    3 Credit
                  </Text>
                </View>
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
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      { letterSpacing: 0.2, lineHeight: 20 },
                    ]}
                  >
                    Fundamentals of programming concepts using Python, including
                    variables, control structures, and basic algorithms...
                  </Text>
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontSemiBold,
                    ]}
                  >
                    Engineering Mathematics
                  </Text>
                  <View>
                    <Option
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    SWE001
                  </Text>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    3 Credit
                  </Text>
                </View>
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
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      { letterSpacing: 0.2, lineHeight: 20 },
                    ]}
                  >
                    Fundamentals of programming concepts using Python, including
                    variables, control structures, and basic algorithms...
                  </Text>
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
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontSemiBold,
                    ]}
                  >
                    Engineering Mathematics
                  </Text>
                  <View>
                    <Option
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    SWE001
                  </Text>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    3 Credit
                  </Text>
                </View>
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
                <View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      { letterSpacing: 0.2, lineHeight: 20 },
                    ]}
                  >
                    Fundamentals of programming concepts using Python, including
                    variables, control structures, and basic algorithms...
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
export default CourseScreen;
