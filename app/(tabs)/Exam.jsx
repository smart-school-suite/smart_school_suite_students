import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { ExamCard, ExamResultCard } from "../../components/card/Exam";
import {
  ExamListSkeleton,
  ExamScreenTabSkeleton,
} from "../../components/skeleton/ExamScreenSkeleton";
import { useGetAllExams } from "../../hooks/api/exam/useGetAllExams";
import { useGetExamBySemester } from "../../hooks/api/exam/useGetExamBySemester";
import { useGetSemesters } from "../../hooks/api/semester/useGetSemesters";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function ExamScreen() {
  const authUser = useSelector((state) => state.auth.user);
  const { data: semesters, isLoading: isSemesterLoading } = useGetSemesters();
  const [tab, setTab] = useState({
    id: "all",
    title: "all",
    count: 0,
  });
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
            <Text
              style={[
                utilityStyles.text4Xl,
                utilityStyles.fontBold,
                lightModeStyles.textLight,
              ]}
            >
              Exams
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                columnGap: 12,
              }}
            >
              {isSemesterLoading ? (
                <ExamScreenTabSkeleton />
              ) : (
                <>
                  <Pressable
                    style={[
                      styles.tabContainer,
                      tab.id == "all"
                        ? styles.tabContainerActive
                        : styles.tabContainerInActive,
                    ]}
                    onPress={() => {
                      setTab((prev) => ({
                        ...prev,
                        count: 0,
                        id: "all",
                        title: "All",
                      }));
                    }}
                  >
                    <Text
                      style={[
                        styles.tabText,
                        tab.id == "all"
                          ? styles.tabTextActive
                          : styles.tabTextInActive,
                      ]}
                    >
                      All
                    </Text>
                  </Pressable>
                  {semesters.data.map((items) => (
                    <Pressable
                      style={[
                        styles.tabContainer,
                        tab.id == items.id
                          ? styles.tabContainerActive
                          : styles.tabContainerInActive,
                      ]}
                      key={items.id}
                      onPress={() => {
                        setTab((prev) => ({
                          ...prev,
                          count: items.count,
                          id: items.id,
                          title: items.name,
                        }));
                      }}
                    >
                      <Text
                        style={[
                          styles.tabText,
                          tab.id == items.id
                            ? styles.tabTextActive
                            : styles.tabTextInActive,
                        ]}
                      >
                        {items.name}
                      </Text>
                    </Pressable>
                  ))}
                </>
              )}
            </ScrollView>
            {tab.id == "all" ? (
              <AllExams studentId={authUser.id} />
            ) : (
              <DynamicExams semesterId={tab.id} studentId={authUser.id} />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ExamScreen;

function AllExams({ studentId }) {
  const { data: allExams, isLoading: isAllExamLoading } =
    useGetAllExams(studentId);
  return (
    <>
      {isAllExamLoading ? (
        <ExamListSkeleton />
      ) : (
        <>
          {allExams.data.map((semester) => {
            return (
              <View
                style={[utilityStyles.flexCol, utilityStyles.gSm]}
                key={semester.semesterId}
              >
                <Text
                  style={[
                    utilityStyles.textLg,
                    utilityStyles.fontSemiBold,
                    lightModeStyles.textLight,
                    utilityStyles.textCapitalize,
                  ]}
                >
                  {semester.semester}
                </Text>
                {semester.exams.map((exam) => (
                  <React.Fragment key={exam.exam_id}>
                    {exam.result_released && (
                  <ExamResultCard
                    result_title={exam?.result_message?.title}
                    result_message={exam?.result_message?.body}
                    exam_id={exam.exam_id}
                  />
                )}
                    <ExamCard
                      exam_name={exam.exam_name}
                      specialty_name={exam.specialty_name}
                      level_name={exam.level_name}
                      description={exam.description}
                      start_date={exam.start_date}
                      end_date={exam.end_date}
                      exam_id={exam.exam_id}
                    />
                  </React.Fragment>
                ))}
              </View>
            );
          })}
        </>
      )}
    </>
  );
}

function DynamicExams({ studentId, semesterId }) {
  const { data: examData, isLoading: isExamDataLoading } = useGetExamBySemester(
    studentId,
    semesterId
  );
  const notFoundImage = require("../../assets/images/maskot/404.png");
  return (
    <>
      {isExamDataLoading ? (
        <ExamListSkeleton />
      ) : examData?.data?.exams.length > 0 ? (
        <>
          <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
            <Text
              style={[
                utilityStyles.textLg,
                utilityStyles.fontSemiBold,
                lightModeStyles.textLight,
                utilityStyles.textCapitalize,
              ]}
            >
              {examData.data.semester}
            </Text>
            {examData?.data?.exams?.map((exam) => (
              <React.Fragment key={exam.exam_id}>
                {exam.result_released && (
                  <ExamResultCard
                    result_title={exam.result_message.title}
                    result_message={exam.result_message.body}
                    key={exam.result_message.id}
                    exam_id={exam.exam_id}
                  />
                )}
                 <ExamCard
                  exam_name={exam.exam_name}
                  specialty_name={exam.specialty_name}
                  level_name={exam.level_name}
                  description={exam.description}
                  start_date={exam.start_date}
                  end_date={exam.end_date}
                  exam_id={exam.exam_id}
                />
              </React.Fragment>
            ))}
          </View>
        </>
      ) : (
        <>
          <View
            style={[
              utilityStyles.flexCol,
              utilityStyles.justifyCenter,
              utilityStyles.alignCenter,
              { height: 500 },
            ]}
          >
            <Image
              source={notFoundImage}
              style={{ width: 250, height: 250, resizeMode: "cover" }}
            />
          </View>
        </>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  tabContainer: {
    ...utilityStyles.roundedCircle,
    ...utilityStyles.flexCol,
    ...utilityStyles.alignCenter,
    ...utilityStyles.justifyCenter,
    paddingHorizontal: 16,
    minWidth: 55,
    width: "auto",
    maxWidth: 200,
    height: 48,
  },
  tabText: {
    ...utilityStyles.textXs,
    ...utilityStyles.textCenter,
    ...utilityStyles.fontSemiBold,
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
    ...lightModeStyles.colorPrimary,
  },
});
