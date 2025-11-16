import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../assets/icons/Back";
import { CalendarLine } from "../../../assets/icons/CalendarLine";
import { Option } from "../../../assets/icons/Option";
import { colorPrimitives } from "../../../constants/theme";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function ApplicationScreen() {
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
                My Applications
              </Text>
            </View>
            <View>
              <View
                style={[
                  utilityStyles.bgSuccess100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    width: 80,
                    paddingHorizontal: 5,
                    height: 25,
                    borderRadius: 5,
                  },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    utilityStyles.colorSuccess400,
                  ]}
                >
                  Accepted
                </Text>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Election Role
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Student Union President
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
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Manifesto
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      I believe every student’s voice matters. My goal is to
                      foster an inclusive campus environment where all students
                      feel heard, supported, and empowered. I will work
                      tirelessly to im...
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Personal Vision
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      To be a catalyst for positive change within our campus
                      community, inspiring collaboration, innovation, and
                      respect. I envision a student body united in diversity,
                      where every individual’s poten..
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      commitment statement
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      If elected, I commit to serving with integrity,
                      transparency, and dedication. I will listen actively, act
                      responsibly, and prioritize the needs of my fellow
                      students. Together, we can build...
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
                  <View>
                    
                    <CalendarLine
                      height={24}
                      width={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.textMd,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Wed 12 Oct 2026, 8:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colorPrimitives.light.colorBorder,
              }}
            ></View>
            <View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    width: 80,
                    paddingHorizontal: 5,
                    height: 25,
                    borderRadius: 5,
                    backgroundColor:colorPrimitives.danger[100]
                  },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    {color: colorPrimitives.danger[400]}
                  ]}
                >
                  Rejected
                </Text>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Election Role
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Student Union President
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
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Manifesto
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      I believe every student’s voice matters. My goal is to
                      foster an inclusive campus environment where all students
                      feel heard, supported, and empowered. I will work
                      tirelessly to im...
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Personal Vision
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      To be a catalyst for positive change within our campus
                      community, inspiring collaboration, innovation, and
                      respect. I envision a student body united in diversity,
                      where every individual’s poten..
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      commitment statement
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      If elected, I commit to serving with integrity,
                      transparency, and dedication. I will listen actively, act
                      responsibly, and prioritize the needs of my fellow
                      students. Together, we can build...
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
                  <View>
                    
                    <CalendarLine
                      height={24}
                      width={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.textMd,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Wed 12 Oct 2026, 8:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colorPrimitives.light.colorBorder,
              }}
            ></View>
             <View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    width: 80,
                    paddingHorizontal: 5,
                    height: 25,
                    borderRadius: 5,
                    backgroundColor:colorPrimitives.danger[100]
                  },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    {color: colorPrimitives.danger[400]}
                  ]}
                >
                  Rejected
                </Text>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Election Role
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Student Union President
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
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Manifesto
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      I believe every student’s voice matters. My goal is to
                      foster an inclusive campus environment where all students
                      feel heard, supported, and empowered. I will work
                      tirelessly to im...
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Personal Vision
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      To be a catalyst for positive change within our campus
                      community, inspiring collaboration, innovation, and
                      respect. I envision a student body united in diversity,
                      where every individual’s poten..
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      commitment statement
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      If elected, I commit to serving with integrity,
                      transparency, and dedication. I will listen actively, act
                      responsibly, and prioritize the needs of my fellow
                      students. Together, we can build...
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
                  <View>
                    
                    <CalendarLine
                      height={24}
                      width={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.textMd,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Wed 12 Oct 2026, 8:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colorPrimitives.light.colorBorder,
              }}
            ></View>
            <View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                  {
                    width: 80,
                    paddingHorizontal: 5,
                    height: 25,
                    borderRadius: 5,
                    backgroundColor:colorPrimitives.danger[100]
                  },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    {color: colorPrimitives.danger[400]}
                  ]}
                >
                  Rejected
                </Text>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Election Role
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Student Union President
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
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Manifesto
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      I believe every student’s voice matters. My goal is to
                      foster an inclusive campus environment where all students
                      feel heard, supported, and empowered. I will work
                      tirelessly to im...
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      Personal Vision
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      To be a catalyst for positive change within our campus
                      community, inspiring collaboration, innovation, and
                      respect. I envision a student body united in diversity,
                      where every individual’s poten..
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      commitment statement
                    </Text>
                    <Text
                      style={[
                        utilityStyles.fontRegular,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                        { lineHeight: 24, letterSpacing: 0.2 },
                      ]}
                    >
                      If elected, I commit to serving with integrity,
                      transparency, and dedication. I will listen actively, act
                      responsibly, and prioritize the needs of my fellow
                      students. Together, we can build...
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
                  <View>
                    
                    <CalendarLine
                      height={24}
                      width={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      utilityStyles.fontMedium,
                      utilityStyles.textMd,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Wed 12 Oct 2026, 8:00
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
export default ApplicationScreen;
