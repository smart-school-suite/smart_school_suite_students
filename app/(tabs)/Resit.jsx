import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function ResitScreen(){
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
                      <View  style={[
                  utilityStyles.roundedXl,
                  utilityStyles.pMd,
                  lightModeStyles.borderColor,
                  utilityStyles.flexCol,
                  utilityStyles.gMd,
                  { backgroundColor: "#fff", borderWidth: 0.5 },
                ]}>
                       <View style={[utilityStyles.flexCol, utilityStyles.alignCenter, utilityStyles.justifyBetween]}>
                         <Text>Introduction To Databases</Text>
                       </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </SafeAreaView>
        </>
     )
}
export default ResitScreen;