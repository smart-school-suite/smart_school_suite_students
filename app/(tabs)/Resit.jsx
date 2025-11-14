import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckFilled } from "../../assets/icons/CheckFilled";
import { Dot } from "../../assets/icons/Dot";
import { Hash } from "../../assets/icons/Hash";
import { Level } from "../../assets/icons/Level";
import { Star } from "../../assets/icons/Star";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function ResitScreen() {
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
              Resits
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
                  Carry Over
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
              { [...Array(5)].map((items, index) => (
                 <View
                style={[
                  utilityStyles.roundedXl,
                  utilityStyles.pMd,
                  lightModeStyles.borderColor,
                  utilityStyles.flexCol,
                  utilityStyles.gXl,
                  { backgroundColor: "#fff", borderWidth: 0.5 },
                ]}
                key={index}
              >
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
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.g2Xs,
                      utilityStyles.alignCenter,
                    ]}
                  >
                    <Text
                      style={[
                        utilityStyles.textSm,
                        utilityStyles.fontMedium,
                        utilityStyles.colorSuccess400
                      ]}
                    >
                      Paid
                    </Text>
                    <View>
                      <CheckFilled
                        width={18}
                        height={18}
                        color={colorPrimitives.success[400]}
                      />
                    </View>
                  </View>
                </View>
                <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
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
                <View style={[utilityStyles.flexRow, utilityStyles.justifyEnd]}>
                   <Text 
                    style={[
                          utilityStyles.text2Xl,
                          utilityStyles.fontBold,
                          lightModeStyles.textLight,
                        ]}>10,000 ₣</Text>
                </View>
              </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ResitScreen;
