import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../assets/icons/Back";
import { FormLine } from "../../assets/icons/FormLine";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function ElectionRoleScreen() {
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
            <Pressable onPress={() => router.push("/Home")}>
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
                Election Role
              </Text>
            </View>
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textLg,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Student Body President
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textMd,
                    utilityStyles.fontRegular,
                    { lineHeight: 24, letterSpacing: 0.2 },
                  ]}
                >
                  {" "}
                  The primary student leader of the school. They lead the
                  Student Council, represent the student body to the school
                  administration and faculty, oversee Council activities,{" "}
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.alignCenter,
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.gXs,
                  ]}
                >
                  <View>
                    <FormLine
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    +100 Applications
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    utilityStyles.pSm,
                    { width: 100 },
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.colorOnPrimary,
                      utilityStyles.textMd,
                      utilityStyles.textCenter,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colorPrimitives.light.colorBorder,
              }}
            ></View>
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textLg,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Student Body President
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textMd,
                    utilityStyles.fontRegular,
                    { lineHeight: 24, letterSpacing: 0.2 },
                  ]}
                >
                  {" "}
                  The primary student leader of the school. They lead the
                  Student Council, represent the student body to the school
                  administration and faculty, oversee Council activities,{" "}
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.alignCenter,
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.gXs,
                  ]}
                >
                  <View>
                    <FormLine
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    +100 Applications
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    utilityStyles.pSm,
                    { width: 100 },
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.colorOnPrimary,
                      utilityStyles.textMd,
                      utilityStyles.textCenter,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colorPrimitives.light.colorBorder,
              }}
            ></View>
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textLg,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Student Body President
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textMd,
                    utilityStyles.fontRegular,
                    { lineHeight: 24, letterSpacing: 0.2 },
                  ]}
                >
                  {" "}
                  The primary student leader of the school. They lead the
                  Student Council, represent the student body to the school
                  administration and faculty, oversee Council activities,{" "}
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.alignCenter,
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.gXs,
                  ]}
                >
                  <View>
                    <FormLine
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    +100 Applications
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    utilityStyles.pSm,
                    { width: 100 },
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.colorOnPrimary,
                      utilityStyles.textMd,
                      utilityStyles.textCenter,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colorPrimitives.light.colorBorder,
              }}
            ></View>
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textLg,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Student Body President
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textMd,
                    utilityStyles.fontRegular,
                    { lineHeight: 24, letterSpacing: 0.2 },
                  ]}
                >
                  {" "}
                  The primary student leader of the school. They lead the
                  Student Council, represent the student body to the school
                  administration and faculty, oversee Council activities,{" "}
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.alignCenter,
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.gXs,
                  ]}
                >
                  <View>
                    <FormLine
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    +100 Applications
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    utilityStyles.pSm,
                    { width: 100 },
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.colorOnPrimary,
                      utilityStyles.textMd,
                      utilityStyles.textCenter,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colorPrimitives.light.colorBorder,
              }}
            ></View>
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textLg,
                    utilityStyles.fontSemiBold,
                  ]}
                >
                  Student Body President
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textMd,
                    utilityStyles.fontRegular,
                    { lineHeight: 24, letterSpacing: 0.2 },
                  ]}
                >
                  {" "}
                  The primary student leader of the school. They lead the
                  Student Council, represent the student body to the school
                  administration and faculty, oversee Council activities,{" "}
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.alignCenter,
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.gXs,
                  ]}
                >
                  <View>
                    <FormLine
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      lightModeStyles.textLight,
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    +100 Applications
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    utilityStyles.pSm,
                    { width: 100 },
                  ]}
                >
                  <Text
                    style={[
                      lightModeStyles.colorOnPrimary,
                      utilityStyles.textMd,
                      utilityStyles.textCenter,
                      utilityStyles.fontMedium,
                    ]}
                  >
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ElectionRoleScreen;
