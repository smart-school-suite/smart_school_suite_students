import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { AlertLine } from "../../assets/icons/AlertLine";
import { Important } from "../../assets/icons/ImportantLine";
import { InfoLine } from "../../assets/icons/InfoLine";
import { MenuFilled } from "../../assets/icons/MenuFilled";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function Announcement() {
  const [tab, setTab] = useState("all");
  return (
    <>
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
              paddingVertical:8,
              paddingEnd:12
            }}
          >
            <Pressable
              style={[
                styles.tabContainer,
                tab == "all"
                  ? styles.tabContainerActive
                  : styles.tabContainerInActive,
              ]}
              onPress={() => {
                setTab("all");
              }}
            >
              <View>
                <MenuFilled
                  width={16}
                  height={16}
                  color={
                    tab == "all"
                      ? colorPrimitives.light.colorOnPrimary
                      : colorPrimitives.primary[400]
                  }
                />
              </View>
              <View>
                <Text
                  style={[
                    tab == "all"
                      ? styles.tabTextActive
                      : styles.tabTextInActive,
                  ]}
                >
                  General
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.tabContainer,
                tab == "important"
                  ? styles.tabContainerActive
                  : styles.tabContainerInActive,
              ]}
              onPress={() => {
                setTab("important");
              }}
            >
              <View>
                <Important
                  width={16}
                  height={16}
                  color={
                    tab == "important"
                      ? colorPrimitives.light.colorOnPrimary
                      : colorPrimitives.primary[400]
                  }
                />
              </View>
              <View>
                <Text
                  style={[
                    tab == "important"
                      ? styles.tabTextActive
                      : styles.tabTextInActive,
                  ]}
                >
                  Important
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.tabContainer,
                tab == "urgent"
                  ? styles.tabContainerActive
                  : styles.tabContainerInActive,
              ]}
              onPress={() => {
                 setTab("urgent")
              }}
            >
              <View>
                <AlertLine
                  width={16}
                  height={16}
                  color={
                    tab == "urgent"
                      ? colorPrimitives.light.colorOnPrimary
                      : colorPrimitives.primary[400]
                  }
                />
              </View>
              <View>
                <Text
                  style={[
                    tab == "urgent"
                      ? styles.tabTextActive
                      : styles.tabTextInActive,
                  ]}
                >
                  Urgent
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.tabContainer,
                tab == "info"
                  ? styles.tabContainerActive
                  : styles.tabContainerInActive,
              ]}
              onPress={() => {
                setTab("info");
              }}
            >
              <View>
                <InfoLine
                  width={16}
                  height={16}
                  color={
                    tab == "info"
                      ? colorPrimitives.light.colorOnPrimary
                      : colorPrimitives.primary[400]
                  }
                />
              </View>
              <View>
                <Text
                  style={[
                    tab == "info"
                      ? styles.tabTextActive
                      : styles.tabTextInActive,
                  ]}
                >
                  Info as
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
                  23 Jan 2026, 8:00 AM
                </Text>
              </View>
              <View>
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
                  The annual school science fair will be held on March 15th in
                  the auditorium. Students are encouraged to showcase their
                  projects and innovations. Judges from local universities will
                  be present
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
                  The annual school science fair will be held on March 15th in
                  the auditorium. Students are encouraged to showcase their
                  projects and innovations. Judges from local universities will
                  be present
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
                  The annual school science fair will be held on March 15th in
                  the auditorium. Students are encouraged to showcase their
                  projects and innovations. Judges from local universities will
                  be present
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
export default Announcement;

const styles = StyleSheet.create({
  tabContainer: {
    ...utilityStyles.flexRow,
    ...utilityStyles.gMd,
    ...utilityStyles.alignCenter,
    ...utilityStyles.justifyCenter,
    ...utilityStyles.pSm,
    ...lightModeStyles.bgPrimary,
    ...utilityStyles.roundedCircle,
    width: "auto",
    maxWidth: 120,
  },
  tabText: {
    ...utilityStyles.textSm,
    ...utilityStyles.fontMedium,
  },
  tabContainerActive: {
    ...lightModeStyles.bgPrimary,
  },
  tabContainerInActive: {
    ...utilityStyles.bgPrimary50,
    borderWidth:1,
    borderColor:colorPrimitives.primary[100]
  },
  tabTextActive: {
    ...lightModeStyles.colorOnPrimary,
  },
  tabTextInActive: {
    ...utilityStyles.colorPrimary400,
  },
});
