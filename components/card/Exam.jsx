import { useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { Announcement } from "../../assets/icons/Announcement";
import { Arrow } from "../../assets/icons/Arrow";
import { CalendarLine } from "../../assets/icons/CalendarLine";
import { ClockLine } from "../../assets/icons/ClockLine";
import { Dash } from "../../assets/icons/Dash";
import { Level } from "../../assets/icons/Level";
import { Option } from "../../assets/icons/Option";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
import { formatDate, getTimeLeftToStart } from "../../utils/functions";
export function ExamCard(props) {
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.pSm,
          utilityStyles.roundedXl,
          lightModeStyles.borderColor,
          utilityStyles.gLg,
          { borderWidth: 0.5 },
        ]}
      >
        <View>
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
                {props.exam_name}
              </Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  SheetManager.show("exam-action-sheet", {
                     payload:{
                       examId:props.exam_id,
                     examName:props.exam_name,
                     specialtyName:props.specialty_name,
                     levelName:props.level_name,
                     description:props.description,
                     startDate:props.start_date,
                     endDate:props.end_date
                     }
                  });
                }}
              >
                <Option
                  width={24}
                  height={24}
                  color={colorPrimitives.light.colorTextPrimary}
                />
              </Pressable>
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
                {`${props.specialty_name}, ${props.level_name}`}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[
              utilityStyles.textSm,
              utilityStyles.fontMedium,
              lightModeStyles.textLight,
              { letterSpacing: 0.2, lineHeight: 22 },
            ]}
          >
            {props.description}
          </Text>
        </View>
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.justifyBetween,
            utilityStyles.alignCenter,
          ]}
        >
          <View style={[utilityStyles.flexCol, { gap: 4 }]}>
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
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
               {getTimeLeftToStart(props.start_date, props.end_date)}
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
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                  ]}
                >
                  {formatDate(props.start_date)}
                </Text>
                <Dash
                  width={18}
                  height={18}
                  color={colorPrimitives.light.colorTextPrimary}
                />
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                  ]}
                >
                  {formatDate(props.end_date)}
                </Text>
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
              { width: 48, height: 48, transform: [{ rotate: "45deg" }] },
            ]}
            onPress={() => {
              SheetManager.show("exam-sheet", {
                  payload:{
                     examId:props.exam_id,
                     examName:props.exam_name,
                     specialtyName:props.specialty_name,
                     levelName:props.level_name,
                     description:props.description,
                     startDate:props.start_date,
                     endDate:props.end_date
                  }
              });
            }}
          >
            <Arrow
              height={18}
              width={18}
              color={colorPrimitives.light.colorOnPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export function ExamResultCard(props) {
  const router = useRouter();
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.pSm,
          utilityStyles.roundedXl,
          lightModeStyles.borderColor,
          utilityStyles.gSm,
          { borderWidth: 0.5 },
        ]}
      >
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.alignCenter,
            utilityStyles.gSm,
          ]}
        >
          <View>
            <Announcement
              color={colorPrimitives.light.colorTextPrimary}
              width={24}
              height={24}
            />
          </View>
          <Text
            style={[
              utilityStyles.textMd,
              utilityStyles.fontSemiBold,
              lightModeStyles.textLight,
            ]}
          >
            {props.result_title}
          </Text>
        </View>
        <View>
          <Text
            style={[
              utilityStyles.textMd,
              utilityStyles.fontMedium,
              lightModeStyles.textLight,
              {
                letterSpacing: 0.2,
                lineHeight: 20,
              },
            ]}
          >
            {props.result_message}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            lightModeStyles.bgPrimary,
            utilityStyles.w100,
            utilityStyles.roundedCircle,
            utilityStyles.flexCol,
            utilityStyles.alignCenter,
            utilityStyles.justifyCenter,
            {
              height: 50,
              padding: 12,
            },
          ]}
          onPress={() => {
            router.push(`/exam/exam-result/${props?.exam_id}`);
          }}
        >
          <Text
            style={[
              utilityStyles.textSm,
              utilityStyles.fontMedium,
              lightModeStyles.colorOnPrimary,
            ]}
          >
            View Results
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
