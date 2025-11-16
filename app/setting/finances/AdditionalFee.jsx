import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../assets/icons/Back";
import { CalendarCancelFilled } from "../../../assets/icons/CalendarCancelFilled";
import { CalendarCancelLine } from "../../../assets/icons/CalendarCancelLine";
import { CalendarLine } from "../../../assets/icons/CalendarLine";
import { CheckFilled } from "../../../assets/icons/CheckFilled";
import { CheckLine } from "../../../assets/icons/CheckLine";
import { ClockLine } from "../../../assets/icons/ClockLine";
import { PaidFilled } from "../../../assets/icons/PaidFilled";
import { PaidLine } from "../../../assets/icons/PaidLine";
import { PendingFilled } from "../../../assets/icons/PendingFilled";
import { PendingLine } from "../../../assets/icons/PendingLine";
import { WarningFilled } from "../../../assets/icons/WarningFilled";
import { colorPrimitives } from "../../../constants/theme";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function AdditionalFeeScreen() {
  const router = useRouter();
  const [tab, setTab] = useState("unpaid");
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
                Additional Fees
              </Text>
            </View>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.bgPrimary100,
                utilityStyles.roundedCircle,
                { padding: 5, width: "100%" },
              ]}
            >
              <Pressable
                style={[
                  styles.tabContainer,
                  tab == "unpaid"
                    ? styles.tabContainerActive
                    : styles.tabContainerInActive,
                ]}
                onPress={() => {
                  setTab("unpaid");
                }}
              >
                <Text
                  style={[
                    styles.tabText,
                    tab == "unpaid"
                      ? styles.tabTextActive
                      : styles.tabTextInActive,
                  ]}
                >
                  Unpaid
                </Text>
                <View>
                  {tab == "unpaid" ? (
                    <PendingFilled
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorOnPrimary}
                    />
                  ) : (
                    <PendingLine
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  )}
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.tabContainer,
                  tab == "due"
                    ? styles.tabContainerActive
                    : styles.tabContainerInActive,
                ]}
                onPress={() => {
                  setTab("due");
                }}
              >
                <Text
                  style={[
                    styles.tabText,
                    tab == "due"
                      ? styles.tabTextActive
                      : styles.tabTextInActive,
                  ]}
                >
                  Due
                </Text>
                <View>
                  {tab == "due" ? (
                    <CalendarCancelFilled
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorOnPrimary}
                    />
                  ) : (
                    <CalendarCancelLine
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  )}
                </View>
              </Pressable>
              <Pressable
                style={[
                  styles.tabContainer,
                  tab == "paid"
                    ? styles.tabContainerActive
                    : styles.tabContainerInActive,
                ]}
                onPress={() => {
                  setTab("paid");
                }}
              >
                <Text
                  style={[
                    styles.tabText,
                    tab == "paid"
                      ? styles.tabTextActive
                      : styles.tabTextInActive,
                  ]}
                >
                  Paid
                </Text>
                <View>
                  {tab == "paid" ? (
                    <PaidFilled
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorOnPrimary}
                    />
                  ) : (
                    <PaidLine
                      width={20}
                      height={20}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  )}
                </View>
              </Pressable>
            </View>
            {
               tab == "unpaid" ? (
                 <UnpaidAdditionalFees />
               ) : tab == "paid" ? (
                <PaidAdditionalFees />
               ) : (
                 <DueAdditionalFees />
               )
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default AdditionalFeeScreen;

function UnpaidAdditionalFees() {
  return (
    <>
      {
         [...Array(10)].map((_items, index) => (
          <View
        style={[
          utilityStyles.roundedXl,
          utilityStyles.pMd,
          lightModeStyles.borderColor,
          utilityStyles.flexCol,
          utilityStyles.gMd,
          { backgroundColor: "#fff", borderWidth: 0.5 },
        ]}
        key={index}
      >
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.justifyBetween,
            utilityStyles.alignCenter,
          ]}
        >
          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textMd,
              lightModeStyles.textLight,
            ]}
          >
            Student Identity Card
          </Text>
          <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
            <CheckLine
              width={16}
              height={16}
              color={colorPrimitives.info[400]}
            />
            <Text
              style={[
                utilityStyles.fontMedium,
                utilityStyles.textSm,
                { color: colorPrimitives.info[400] },
              ]}
            >
              Unpaid
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              utilityStyles.fontRegular,
              utilityStyles.textSm,
              lightModeStyles.textLight,
              { lineHeight: 20, letterSpacing: 0.25 },
            ]}
          >
            This is the first installment fee for the first semester, due before
            the specified deadline.
          </Text>
        </View>
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.g2Xs,
            utilityStyles.alignEnd,
            utilityStyles.justifyBetween,
          ]}
        >
          <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.gXs,
                utilityStyles.alignCenter,
              ]}
            >
              <ClockLine
                width={16}
                height={16}
                color={colorPrimitives.light.colorTextPrimary}
              />
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                10 Days Left
              </Text>
            </View>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.gXs,
                utilityStyles.alignCenter,
              ]}
            >
              <CalendarLine
                width={16}
                height={16}
                color={colorPrimitives.light.colorTextPrimary}
              />
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                Due Date: 10 Dec 2026
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                utilityStyles.fontSemiBold,
                utilityStyles.textLg,
                lightModeStyles.textLight,
              ]}
            >
              40,000 ₣
            </Text>
          </View>
        </View>
      </View>
         ))
      }
    </>
  );
}
function DueAdditionalFees() {
  return (<>
    {[...Array(10)].map((_items, index) => (
              <View
                style={[
                  utilityStyles.roundedXl,
                  utilityStyles.pMd,
                  lightModeStyles.borderColor,
                  utilityStyles.flexCol,
                  utilityStyles.gMd,
                  { backgroundColor: "#fff", borderWidth: 0.5 },
                ]}
                key={index}
              >
                <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                  <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.justifyBetween,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textMd,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Student Identity Card
                  </Text>
                  <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
                    <CheckLine
                      width={16}
                      height={16}
                      color={colorPrimitives.info[400]}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        { color: colorPrimitives.info[400] },
                      ]}
                    >
                      Unpaid
                    </Text>
                  </View>
                 </View>
                 <View>
                  <View style={{ width:"auto", minWidth:55, maxWidth:70, paddingHorizontal:8, paddingVertical:2, backgroundColor:colorPrimitives.warning[100], borderRadius:5, flexDirection:"row", alignContent:"center", gap:8}}>
                      <View>
                         <WarningFilled  width={18} height={18} color={colorPrimitives.warning[500]} />
                      </View>
                     <Text style={[utilityStyles.textSm, utilityStyles.fontSemiBold, utilityStyles.textCenter, {color:colorPrimitives.warning[500], lineHeight:20}]}>Due</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      utilityStyles.fontRegular,
                      utilityStyles.textSm,
                      lightModeStyles.textLight,
                      { lineHeight: 20, letterSpacing: 0.25 },
                    ]}
                  >
                    This is the first installment fee for the first semester,
                    due before the specified deadline.
                  </Text>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.g2Xs,
                    utilityStyles.alignEnd,
                    utilityStyles.justifyBetween,
                  ]}
                >
                  <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.gXs,
                        utilityStyles.alignCenter,
                      ]}
                    >
                      <ClockLine
                        width={16}
                        height={16}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                        ]}
                      >
                        10 Days Left
                      </Text>
                    </View>
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.gXs,
                        utilityStyles.alignCenter,
                      ]}
                    >
                      <CalendarLine
                        width={16}
                        height={16}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textSm,
                          lightModeStyles.textLight,
                        ]}
                      >
                        Due Date: 10 Dec 2026
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.fontSemiBold,
                        utilityStyles.textLg,
                        lightModeStyles.textLight,
                      ]}
                    >
                      40,000 ₣
                    </Text>
                  </View>
                </View>
              </View>
            ))}
  </>);
}
function PaidAdditionalFees() {
  return (
    <>
      {
        [...Array(10)].map((_items, index) => (
           <View
        style={[
          utilityStyles.roundedXl,
          utilityStyles.pMd,
          lightModeStyles.borderColor,
          utilityStyles.flexCol,
          utilityStyles.gMd,
          { backgroundColor: "#fff", borderWidth: 0.5 },
        ]}
        key={index}
      >
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.justifyBetween,
            utilityStyles.alignCenter,
          ]}
        >
          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textMd,
              lightModeStyles.textLight,
            ]}
          >
            Student Identity Card
          </Text>
          <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
            <CheckFilled
              width={16}
              height={16}
              color={colorPrimitives.success[400]}
            />
            <Text
              style={[
                utilityStyles.fontMedium,
                utilityStyles.textSm,
                { color: colorPrimitives.success[400] },
              ]}
            >
              Paid
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              utilityStyles.fontRegular,
              utilityStyles.textSm,
              lightModeStyles.textLight,
              { lineHeight: 20, letterSpacing: 0.25 },
            ]}
          >
            This is the first installment fee for the first semester, due before
            the specified deadline.
          </Text>
        </View>
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.g2Xs,
            utilityStyles.alignEnd,
            utilityStyles.justifyBetween,
          ]}
        >
          <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.gXs,
                utilityStyles.alignCenter,
              ]}
            >
              <ClockLine
                width={16}
                height={16}
                color={colorPrimitives.light.colorTextPrimary}
              />
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                10 Days Left
              </Text>
            </View>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.gXs,
                utilityStyles.alignCenter,
              ]}
            >
              <CalendarLine
                width={16}
                height={16}
                color={colorPrimitives.light.colorTextPrimary}
              />
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                Due Date: 10 Dec 2026
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                utilityStyles.fontSemiBold,
                utilityStyles.textLg,
                lightModeStyles.textLight,
              ]}
            >
              40,000 ₣
            </Text>
          </View>
        </View>
      </View>
        ))
      }
    </>
  );
}
const styles = StyleSheet.create({
  tabContainer: {
    ...utilityStyles.roundedCircle,
    ...utilityStyles.flexRow,
    ...utilityStyles.alignCenter,
    ...utilityStyles.justifyBetween,
    paddingHorizontal: 16,
    height: 45,
    width: "33%",
  },
  tabText: {
    ...utilityStyles.textSm,
    ...utilityStyles.fontMedium,
  },
  tabContainerActive: {
    ...lightModeStyles.bgPrimary,
  },
  tabContainerInActive: {
    ...utilityStyles.bgPrimary100,
  },
  tabTextActive: {
    ...lightModeStyles.colorOnPrimary,
  },
  tabTextInActive: {
    ...lightModeStyles.textLight,
  },
});
