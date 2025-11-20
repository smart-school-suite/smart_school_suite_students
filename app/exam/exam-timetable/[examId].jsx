import { useLocalSearchParams, useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Back } from "../../../assets/icons/Back";
import { CalendarLine } from "../../../assets/icons/CalendarLine";
import { DashLine } from "../../../assets/icons/DashLine";
import { Dot } from "../../../assets/icons/Dot";
import { Hash } from "../../../assets/icons/Hash";
import { Star } from "../../../assets/icons/Star";
import ScrollCalendar from "../../../components/ui/calendar/ScrollCalendar";
import { colorPrimitives } from "../../../constants/theme";
import { useGetExamTimetable } from "../../../hooks/api/exam/useGetExamTimetable";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
import { formatDate, getEventStatus } from "../../../utils/functions";
function ExamTimetableScreen() {
  const { examId } = useLocalSearchParams();
  const authUser = useSelector((state) => state.auth.user);
  const notFoundImage = require("../../../assets/images/maskot/404.png");
  const { data: examTimetable, isLoading: isExamTimetableLoading } =
    useGetExamTimetable(authUser?.id, examId);
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");

  const filteredSlots = useMemo(() => {
    if (!examTimetable?.data?.slots) return [];

    if (!selectedDate) {
      return examTimetable.data.slots;
    }

    return examTimetable.data.slots.filter(
      (slot) => slot.date === selectedDate
    );
  }, [examTimetable?.data?.slots, selectedDate]);

  return (
    <>
      <SafeAreaView
        style={[
          utilityStyles.flex1,
          utilityStyles.flexCol,
          utilityStyles.gMd,
          {
            backgroundColor: "#fff",
          },
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
            <Pressable onPress={() => router.push("/Exam")}>
              <Back
                width={24}
                height={24}
                color={colorPrimitives.light.colorTextPrimary}
              />
            </Pressable>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.justifyBetween,
                utilityStyles.alignCenter,
              ]}
            >
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.text4Xl,
                    utilityStyles.fontBold,
                    lightModeStyles.textLight,
                  ]}
                >
                  Schedule
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.gXs,
                ]}
              >
                <CalendarLine height={20} width={20} />
                <Text
                  style={[
                    utilityStyles.textMd,
                    utilityStyles.fontSemiBold,
                    lightModeStyles.textLight,
                    
                  ]}
                >
                  {formatDate(selectedDate, true)}
                </Text>
              </View>
            </View>
            <ScrollCalendar onSelect={(value) => setSelectedDate(value)} />
            {isExamTimetableLoading ? (
              <Skeleton colorMode={"light"} width={"100%"} height={150} />
            ) : (
              <>
                <View>
                  <View
                    style={[
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.gXs,
                    ]}
                  >
                    <Text
                      style={[
                        utilityStyles.textLg,
                        utilityStyles.fontSemiBold,
                        lightModeStyles.textLight,
                      ]}
                    >
                      {examTimetable?.data?.exam?.exam_name} Timetable
                    </Text>
                  </View>
                </View>
                {filteredSlots.length === 0 ? (
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.justifyCenter,
                      utilityStyles.alignCenter,
                      utilityStyles.gMd,
                      { height: 500 },
                    ]}
                  >
                    <Image
                      source={notFoundImage}
                      style={{ width: 250, height: 250, resizeMode: "cover" }}
                    />
                    <Text
                      style={[
                        utilityStyles.textMd,
                        utilityStyles.fontSemiBold,
                        lightModeStyles.textLight,
                        utilityStyles.textCenter
                      ]}
                    >
                      Looks Like There are no exam slots scheduled for this
                      date.
                    </Text>
                  </View>
                ) : (
                  filteredSlots.map((slot) => (
                    <ExamTimetableCard scheduleData={slot} key={slot.id} />
                  ))
                )}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ExamTimetableScreen;

function ExamTimetableCard(props) {
  const scheduleData = props.scheduleData;
  const userImage = require("../../../assets/images/user.jpg");
  const slotTimeState = getEventStatus(
    scheduleData?.date,
    scheduleData.start_time,
    scheduleData.end_time
  );
  return (
    <>
      <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.alignCenter,
            utilityStyles.w100,
          ]}
        >
          <View
            style={[
              utilityStyles.flexCol,
              utilityStyles.alignCenter,
              utilityStyles.justifyCenter,
              utilityStyles.gXs,
              utilityStyles.w10,
            ]}
          >
            <Text
              style={[
                utilityStyles.fontMedium,
                utilityStyles.textXs,
                lightModeStyles.textLight,
              ]}
            >
              {scheduleData.start_time}
            </Text>
            <DashLine color={colorPrimitives.light.colorTextPrimary} />
            <Text
              style={[
                utilityStyles.fontMedium,
                utilityStyles.textXs,
                lightModeStyles.textLight,
              ]}
            >
              {scheduleData.end_time}
            </Text>
          </View>
          <View
            style={[
              utilityStyles.roundedXl,
              utilityStyles.pMd,
              utilityStyles.flexCol,
              utilityStyles.gLg,
              lightModeStyles.borderColor,
              utilityStyles.w90,
              { backgroundColor: "#fff", borderWidth: 0.5 },
            ]}
          >
            <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View
                style={[
                  utilityStyles.bgPrimary100,
                  utilityStyles.roundedCircle,
                  utilityStyles.justifyCenter,
                  utilityStyles.alignCenter,
                  utilityStyles.flexCol,
                  { minWidth: 75, width: 50, height: 20 },
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textXs,
                    utilityStyles.fontMedium,
                    utilityStyles.colorPrimary400,
                  ]}
                >
                  Theoritical
                </Text>
              </View>
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                  utilityStyles.w100,
                ]}
              >
                <View style={[utilityStyles.w70]}>
                  <Text
                    style={[
                      utilityStyles.fontSemiBold,
                      utilityStyles.textMd,
                      lightModeStyles.textLight,
                    ]}
                  >
                    {scheduleData.course_title}
                  </Text>
                </View>
                {slotTimeState.completed ? (
                  <CompletedBadge />
                ) : slotTimeState.inProgress ? (
                  <InProgressBadge />
                ) : (
                  <UpcomingBadge />
                )}
              </View>
              <View style={[utilityStyles.flexRow, utilityStyles.alignCenter]}>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.g2Xs,
                  ]}
                >
                  <View>
                    <Star
                      height={18}
                      width={18}
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
                    {scheduleData.course_credit}
                  </Text>
                </View>
                <View>
                  <Dot
                    height={18}
                    width={18}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
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
                      height={18}
                      width={18}
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
                    {scheduleData.course_code}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.justifyBetween,
              ]}
            >
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.gXs,
                ]}
              >
                <Image
                  source={userImage}
                  style={{ width: 35, height: 35, borderRadius: 5 }}
                />
                <Text
                  style={[
                    lightModeStyles.textLight,
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                  ]}
                >
                  Dr. Alex Johnson
                </Text>
              </View>
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
                  {scheduleData.duration}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

function InProgressBadge() {
  return (
    <>
      <View
        style={[
          utilityStyles.flexRow,
          utilityStyles.alignCenter,
          utilityStyles.bgSuccess100,
          utilityStyles.roundedSm,
          {
            height: 20,
            width: 85,
          },
        ]}
      >
        <View>
          <Dot color={colorPrimitives.success[400]} />
        </View>
        <Text
          style={[
            utilityStyles.fontMedium,
            utilityStyles.textXs,
            utilityStyles.colorSuccess400,
          ]}
        >
          In progress
        </Text>
      </View>
    </>
  );
}

function CompletedBadge() {
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.alignCenter,
          utilityStyles.roundedSm,
          utilityStyles.justifyCenter,
          {
            height: 20,
            width: 85,
            backgroundColor: colorPrimitives.warning[100],
          },
        ]}
      >
        <View style={[utilityStyles.flexRow, utilityStyles.alignCenter]}>
          <View>
            <Dot color={colorPrimitives.warning[400]} />
          </View>
          <Text
            style={[
              utilityStyles.fontMedium,
              utilityStyles.textXs,
              {
                color: colorPrimitives.warning[400],
              },
            ]}
          >
            Completed
          </Text>
        </View>
      </View>
    </>
  );
}

function UpcomingBadge() {
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.alignCenter,
          utilityStyles.roundedSm,
          utilityStyles.justifyCenter,
          {
            height: 20,
            width: 85,
            backgroundColor: colorPrimitives.info[100],
          },
        ]}
      >
        <View style={[utilityStyles.flexRow, utilityStyles.alignCenter]}>
          <View>
            <Dot color={colorPrimitives.info[400]} />
          </View>
          <Text
            style={[
              utilityStyles.fontMedium,
              utilityStyles.textXs,
              {
                color: colorPrimitives.info[400],
              },
            ]}
          >
            Upcoming
          </Text>
        </View>
      </View>
    </>
  );
}
