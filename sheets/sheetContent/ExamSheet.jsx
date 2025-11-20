import { CalendarLine } from "@/assets/icons/CalendarLine";
import { colorPrimitives } from "@/constants/theme";
import { lightModeStyles } from "@/styles/theme/light";
import { utilityStyles } from "@/styles/utility";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { ClockLine } from "../../assets/icons/ClockLine";
import { Dash } from "../../assets/icons/Dash";
import { Level } from "../../assets/icons/Level";
import { formatDate, getTimeLeftToStart } from "../../utils/functions";
function ExamSheet(props) {
  const router = useRouter();
  return (
    <>
      <ActionSheet
        gestureEnabled
        containerStyle={{
          height: "auto",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        id={props.sheetId} 
      >
        <View style={[{ paddingHorizontal: 20, paddingTop: 10 }]}>
          <View>
            <View style={[utilityStyles.flexCol, utilityStyles.gLg]}>
              <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
                <Text
                  style={[
                    utilityStyles.textLg,
                    utilityStyles.fontSemiBold,
                    lightModeStyles.textLight,
                  ]}
                >
                  {props?.payload?.examName}
                </Text>
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
                        utilityStyles.textMd,
                        utilityStyles.fontMedium,
                        lightModeStyles.textLight,
                      ]}
                    >
                      {props?.payload?.specialtyName}, {props?.payload?.levelName}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    utilityStyles.textMd,
                    utilityStyles.fontRegular,
                    lightModeStyles.textLight,
                    { lineHeight: 22, letterSpacing: 0.25 },
                  ]}
                >
                  {props?.payload?.description}
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.justifyBetween,
                  utilityStyles.alignCenter,
                ]}
              >
                <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                    <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.gXs,
                    ]}
                  >
                    <ClockLine
                      width={18}
                      height={18}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <Text
                      style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textMd,
                        lightModeStyles.textLight,
                      ]}
                    >
                      {getTimeLeftToStart(props?.payload?.startDate)}
                    </Text>
                  </View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.gXs,
                    ]}
                  >
                    <CalendarLine
                      width={18}
                      height={18}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.g2Xs,
                      ]}
                    >
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textMd,
                          lightModeStyles.textLight,
                        ]}
                      >
                       {formatDate(props?.payload?.startDate)}
                      </Text>
                      <Dash
                        width={18}
                        height={18}
                        color={colorPrimitives.light.colorTextPrimary}
                      />
                      <Text
                        style={[
                          utilityStyles.fontMedium,
                          utilityStyles.textMd,
                          lightModeStyles.textLight,
                        ]}
                      >
                        {formatDate(props?.payload?.endDate)}
                      </Text>
                    </View>
                  </View>
                  
                </View>
              </View>

              <TouchableOpacity
                  style={[
                    utilityStyles.flexCol,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyCenter,
                    lightModeStyles.bgPrimary,
                    utilityStyles.roundedCircle,
                    utilityStyles.w100,
                    { height: 58,},
                  ]}
                  onPress={() => {
                      router.push(`/exam/exam-timetable/${props?.payload?.examId}`);
                  }}
                >
                 <Text style={[
                        utilityStyles.fontMedium,
                        utilityStyles.textSm,
                        lightModeStyles.colorOnPrimary,
                      ]}>View Timetable </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ActionSheet>
    </>
  );
}
export default ExamSheet;
