import { CalendarLine } from "@/assets/icons/CalendarLine";
import { colorPrimitives } from "@/constants/theme";
import { lightModeStyles } from "@/styles/theme/light";
import { utilityStyles } from "@/styles/utility";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { Download } from "../../assets/icons/Download";
import { Scale } from "../../assets/icons/Scale";
function ExamActionSheet(props) {
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
        <View style={[{ paddingHorizontal: 20, paddingTop: 20 }]}>
          <Pressable
            style={[
              utilityStyles.flexRow,
              utilityStyles.alignStart,
              utilityStyles.gSm,
              { height: 50 },
            ]}
          >
            <View>
              <Download color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textMd,
                  lightModeStyles.textLight,
                ]}
              >
                Download Timetable PDF
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </Pressable>
          <Pressable
            style={[
              utilityStyles.flexRow,
              utilityStyles.alignStart,
              utilityStyles.gSm,
              { height: 50 },
            ]}
          >
            <View>
              <Download color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textMd,
                  lightModeStyles.textLight,
                ]}
              >
                Download Form B
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </Pressable>
          <Pressable
            style={[
              utilityStyles.flexRow,
              utilityStyles.alignStart,
              utilityStyles.gSm,
              { height: 50 },
            ]}
            onPress={() => {
              router.push(`/exam/exam-timetable/${props?.payload?.examId}`);
            }}
          >
            <View>
              <CalendarLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textMd,
                  lightModeStyles.textLight,
                ]}
              >
                Exam Timetable
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </Pressable>
          <Pressable
            style={[
              utilityStyles.flexRow,
              utilityStyles.alignStart,
              utilityStyles.gSm,
              { height: 50 },
            ]}
            onPress={() => {
              router.push(`/exam/exam-grading/${props?.payload?.examId}`);
            }}
          >
            <View>
              <Scale color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textMd,
                  lightModeStyles.textLight,
                ]}
              >
                Exam Grade Scale
              </Text>
            </View>
          </Pressable>
        </View>
      </ActionSheet>
    </>
  );
}
export default ExamActionSheet;
