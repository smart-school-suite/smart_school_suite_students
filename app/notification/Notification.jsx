import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../assets/icons/Back";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function NotificationScreen() {
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
                Notification
              </Text>
            </View>
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
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
                      utilityStyles.textLg,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Announcement Title
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    3 Mins Ago
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textMd,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 20 },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ullam fugit inventore recusandae explicabo, velit
                  dolorum illo maiores, quisquam, quo libero expedita ea. Aut
                  quis iste id accusantium omnis dolorem!
                </Text>
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
                      utilityStyles.textLg,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Announcement Title
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    3 Mins Ago
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textMd,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 22 },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ullam fugit inventore recusandae explicabo, velit
                  dolorum illo maiores, quisquam, quo libero expedita ea. Aut
                  quis iste id accusantium omnis dolorem!
                </Text>
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
                      utilityStyles.textLg,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Announcement Title
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    3 Mins Ago
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textMd,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 20 },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ullam fugit inventore recusandae explicabo, velit
                  dolorum illo maiores, quisquam, quo libero expedita ea. Aut
                  quis iste id accusantium omnis dolorem!
                </Text>
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
                      utilityStyles.textLg,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Announcement Title
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    3 Mins Ago
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textMd,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 20 },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ullam fugit inventore recusandae explicabo, velit
                  dolorum illo maiores, quisquam, quo libero expedita ea. Aut
                  quis iste id accusantium omnis dolorem!
                </Text>
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
                      utilityStyles.textLg,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Announcement Title
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    3 Mins Ago
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textMd,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 20 },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ullam fugit inventore recusandae explicabo, velit
                  dolorum illo maiores, quisquam, quo libero expedita ea. Aut
                  quis iste id accusantium omnis dolorem!
                </Text>
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
                      utilityStyles.textLg,
                      utilityStyles.fontBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Announcement Title
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.textMd,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    3 Mins Ago
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.fontRegular,
                    utilityStyles.textMd,
                    lightModeStyles.textLight,
                    { letterSpacing: 0.2, lineHeight: 20 },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ullam fugit inventore recusandae explicabo, velit
                  dolorum illo maiores, quisquam, quo libero expedita ea. Aut
                  quis iste id accusantium omnis dolorem!
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default NotificationScreen;
