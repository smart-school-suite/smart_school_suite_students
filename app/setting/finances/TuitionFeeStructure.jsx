import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../assets/icons/Back";
import { CalendarLine } from "../../../assets/icons/CalendarLine";
import { CheckFilled } from "../../../assets/icons/CheckFilled";
import { ClockLine } from "../../../assets/icons/ClockLine";
import { Progress } from "../../../assets/icons/Progress";
import { colorPrimitives } from "../../../constants/theme";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function TuitionFeeStructureScreen() {
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
                Fee Schedule
              </Text>
            </View>
            <View style={[utilityStyles.flexRow]}>
                <View style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}>
              <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                 <View >
                  <Text style={[utilityStyles.fontSemiBold, utilityStyles.textMd, lightModeStyles.textLight]}>First Installment</Text>
                 </View>
                 <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
                   <CheckFilled width={16} height={16} color={colorPrimitives.success[400]}/>
                  <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, utilityStyles.colorSuccess400]}>Completed</Text>
                 </View>
              </View>
              <View>
                 <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}> 
                  This is the first installment fee for the first semester, due before the specified deadline.
                 </Text>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}>
                  <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}>100,000/100,000</Text>
                  <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}>100% Complete</Text>
                </View>
                <View style={[lightModeStyles.bgLight, utilityStyles.roundedCircle, lightModeStyles.bgLight, {height:4}]}>
                  <View style={[lightModeStyles.bgLight, utilityStyles.roundedCircle, utilityStyles.bgSuccess400, {height:4, width:"50%"}]}>

                  </View>
                </View>
              </View>
              <View style={[utilityStyles.flexRow, utilityStyles.g2Xs, utilityStyles.alignEnd, utilityStyles.justifyBetween]}>
                <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                  <View style={[utilityStyles.flexRow, utilityStyles.gXs, utilityStyles.alignCenter]}>
                   <ClockLine width={16} height={16} color={colorPrimitives.light.colorTextPrimary}/>
                   <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, lightModeStyles.textLight]}>10 Days Left</Text>
                </View>
                <View style={[utilityStyles.flexRow, utilityStyles.gXs, utilityStyles.alignCenter]}>
                   <CalendarLine width={16} height={16} color={colorPrimitives.light.colorTextPrimary}/>
                   <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, lightModeStyles.textLight]}>Due Date: 10 Dec 2026</Text>
                </View>
                </View>
                <View>
                   <Text style={[utilityStyles.fontSemiBold, utilityStyles.textLg, lightModeStyles.textLight]}>100,000 ₣</Text>
                </View>
              </View>
              </View>
            </View>
            <View style={[utilityStyles.flexRow]}>
                <View style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}>
              <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                 <View >
                  <Text style={[utilityStyles.fontSemiBold, utilityStyles.textMd, lightModeStyles.textLight]}>Second Installment</Text>
                 </View>
                 <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
                   <CheckFilled width={16} height={16} color={colorPrimitives.success[400]}/>
                  <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, utilityStyles.colorSuccess400]}>Completed</Text>
                 </View>
              </View>
              <View>
                 <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}> 
                  This is the first installment fee for the first semester, due before the specified deadline.
                 </Text>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}>
                  <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}>100,000/100,000</Text>
                  <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}>100% Complete</Text>
                </View>
                <View style={[lightModeStyles.bgLight, utilityStyles.roundedCircle, lightModeStyles.bgLight, {height:4}]}>
                  <View style={[lightModeStyles.bgLight, utilityStyles.roundedCircle, utilityStyles.bgSuccess400, {height:4, width:"100%"}]}>

                  </View>
                </View>
              </View>
              <View style={[utilityStyles.flexRow, utilityStyles.g2Xs, utilityStyles.alignEnd, utilityStyles.justifyBetween]}>
                <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                  <View style={[utilityStyles.flexRow, utilityStyles.gXs, utilityStyles.alignCenter]}>
                   <ClockLine width={16} height={16} color={colorPrimitives.light.colorTextPrimary}/>
                   <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, lightModeStyles.textLight]}>10 Days Left</Text>
                </View>
                <View style={[utilityStyles.flexRow, utilityStyles.gXs, utilityStyles.alignCenter]}>
                   <CalendarLine width={16} height={16} color={colorPrimitives.light.colorTextPrimary}/>
                   <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, lightModeStyles.textLight]}>Due Date: 10 Dec 2026</Text>
                </View>
                </View>
                <View>
                   <Text style={[utilityStyles.fontSemiBold, utilityStyles.textLg, lightModeStyles.textLight]}>100,000 ₣</Text>
                </View>
              </View>
              </View>
            </View>
             <View style={[utilityStyles.flexRow]}>
                <View style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}>
              <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                 <View >
                  <Text style={[utilityStyles.fontSemiBold, utilityStyles.textMd, lightModeStyles.textLight]}>Third Installment</Text>
                 </View>
                 <View style={[utilityStyles.flexRow, utilityStyles.gXs]}>
                   <Progress width={16} height={16} color={colorPrimitives.info[400]}/>
                  <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, {color:colorPrimitives.info[400]}]}>InProgress</Text>
                 </View>
              </View>
              <View>
                 <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}> 
                  This is the first installment fee for the first semester, due before the specified deadline.
                 </Text>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}>
                  <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}>10,000/40,000</Text>
                  <Text style={[utilityStyles.fontRegular, utilityStyles.textSm, lightModeStyles.textLight, {lineHeight:20, letterSpacing:0.25}]}>25% Complete</Text>
                </View>
                <View style={[lightModeStyles.bgLight, utilityStyles.roundedCircle, lightModeStyles.bgLight, {height:4}]}>
                  <View style={[lightModeStyles.bgLight, utilityStyles.roundedCircle, utilityStyles.bgSuccess400, {height:4, width:"25%"}]}>

                  </View>
                </View>
              </View>
              <View style={[utilityStyles.flexRow, utilityStyles.g2Xs, utilityStyles.alignEnd, utilityStyles.justifyBetween]}>
                <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                  <View style={[utilityStyles.flexRow, utilityStyles.gXs, utilityStyles.alignCenter]}>
                   <ClockLine width={16} height={16} color={colorPrimitives.light.colorTextPrimary}/>
                   <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, lightModeStyles.textLight]}>10 Days Left</Text>
                </View>
                <View style={[utilityStyles.flexRow, utilityStyles.gXs, utilityStyles.alignCenter]}>
                   <CalendarLine width={16} height={16} color={colorPrimitives.light.colorTextPrimary}/>
                   <Text style={[utilityStyles.fontMedium, utilityStyles.textSm, lightModeStyles.textLight]}>Due Date: 10 Dec 2026</Text>
                </View>
                </View>
                <View>
                   <Text style={[utilityStyles.fontSemiBold, utilityStyles.textLg, lightModeStyles.textLight]}>40,000 ₣</Text>
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
export default TuitionFeeStructureScreen;
