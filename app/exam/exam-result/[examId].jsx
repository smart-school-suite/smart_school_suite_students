import { useLocalSearchParams, useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Back } from "../../../assets/icons/Back";
import { BookLine } from "../../../assets/icons/BookLine";
import { CancelFilled } from "../../../assets/icons/CancelFilled";
import { CancelLine } from "../../../assets/icons/CancelLine";
import { CheckFilled } from "../../../assets/icons/CheckFilled";
import { CheckLine } from "../../../assets/icons/CheckLine";
import { Dot } from "../../../assets/icons/Dot";
import { DoubleArrowDown } from "../../../assets/icons/DoubleArrowDown";
import { DoubleArrowUp } from "../../../assets/icons/DoubleArrowUp";
import { ExamLine } from "../../../assets/icons/ExamLine";
import { ExamScoreLine } from "../../../assets/icons/ExamScoreLine";
import { GpaLine } from "../../../assets/icons/GpaLine";
import { Hash } from "../../../assets/icons/Hash";
import { ResitLine } from "../../../assets/icons/ResitLine";
import { Star } from "../../../assets/icons/Star";
import { colorPrimitives } from "../../../constants/theme";
import { useGetExamResults } from "../../../hooks/api/results/useGetExamResults";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function ExamResultScreen() {
  const { examId } = useLocalSearchParams();
  const router = useRouter();
  const authUser = useSelector((state) => state.auth.user);
  const { data: examResults, isLoading: isExamResultsLoading } =
    useGetExamResults(authUser.id, examId);

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
                Exam Results
              </Text>
            </View>
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.justifyBetween,
              ]}
            >
              <Text
                style={[
                  utilityStyles.textMd,
                  utilityStyles.fontMedium,
                  lightModeStyles.textLight,
                ]}
              >
                {examResults?.data[0]?.exam?.examtype?.exam_name}- Results
              </Text>
            </View>
            {isExamResultsLoading ? (
              [...Array(5)].map((_items, index) => (
                <Skeleton
                  colorMode={"light"}
                  width={"100%"}
                  height={150}
                  key={index}
                />
              ))
            ) : (
              <>
                {examResults?.data[0]?.exam.examtype.type == "ca" ? (
                  <CAResult resultData={examResults} />
                ) : (
                  <ExamResult resultData={examResults} />
                )}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ExamResultScreen;

function CAResult(props) {
  const examResults = props.resultData;
  return (
    <>
      {JSON.parse(examResults.data[0].score_details).map((items) => (
        <CaExamCard
          resultData={items}
          examData={examResults.data[0].exam}
          key={items.course_id}
        />
      ))}
      <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
        <Text
          style={[
            utilityStyles.textMd,
            utilityStyles.fontMedium,
            lightModeStyles.textLight,
          ]}
        >
          Result Summary
        </Text>
        <View
          style={[
            utilityStyles.flexCol,
            utilityStyles.pMd,
            utilityStyles.roundedXl,
            lightModeStyles.borderColor,
            utilityStyles.gLg,
            { borderWidth: 0.5 },
          ]}
        >
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <ExamLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            {examResults.data[0].exam_status == "passed" ? (
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.gSm,
                  { width: "90%" },
                ]}
              >
                <View
                  style={[
                    utilityStyles.w100,
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyBetween,
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Exam Status
                  </Text>
                  <View
                    style={[
                      utilityStyles.bgSuccess100,
                      utilityStyles.justifyCenter,
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.g2Xs,
                      {
                        paddingHorizontal: 12,
                        width: 75,
                        height: 20,
                        borderRadius: 4,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        utilityStyles.textSm,
                        { color: colorPrimitives.success[400] },
                      ]}
                    >
                      Passed
                    </Text>
                    <View>
                      <CheckFilled
                        height={15}
                        width={15}
                        color={colorPrimitives.success[400]}
                      />
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
              </View>
            ) : (
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.gSm,
                  { width: "90%" },
                ]}
              >
                <View
                  style={[
                    utilityStyles.w100,
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyBetween,
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Exam Status
                  </Text>
                  <View
                    style={[
                      utilityStyles.justifyCenter,
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.g2Xs,
                      {
                        paddingHorizontal: 10,
                        width: 72,
                        height: 20,
                        borderRadius: 4,
                        backgroundColor: colorPrimitives.danger[100],
                      },
                    ]}
                  >
                    <Text
                      style={[
                        utilityStyles.textSm,
                        { color: colorPrimitives.danger[400] },
                      ]}
                    >
                      Failed
                    </Text>
                    <View>
                      <CheckFilled
                        height={15}
                        width={15}
                        color={colorPrimitives.danger[400]}
                      />
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
              </View>
            )}
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <BookLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Course Sat
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {JSON.parse(examResults?.data[0]?.score_details).length}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <CheckLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Courses Pass
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {
                    JSON.parse(examResults?.data[0]?.score_details).filter(
                      (items) => items.grade_status == "passed"
                    ).length
                  }
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <CancelLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Courses Failed
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {
                    JSON.parse(examResults?.data[0]?.score_details).filter(
                      (items) => items.grade_status == "failed"
                    ).length
                  }
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <ExamScoreLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Total Score
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {examResults.data[0].total_score}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <GpaLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  GPA
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {examResults.data[0].gpa}/4.00
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: "transparent",
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
function ExamResult(props) {
  const examResults = props.resultData;
  return (
    <>
      {JSON.parse(examResults.data[0].score_details).map((items) => (
        <ExamCard
          resultData={items}
          examData={examResults.data[0].exam}
          key={items.course_id}
        />
      ))}
      <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
        <Text
          style={[
            utilityStyles.textMd,
            utilityStyles.fontMedium,
            lightModeStyles.textLight,
          ]}
        >
          Result Summary
        </Text>
        <View
          style={[
            utilityStyles.flexCol,
            utilityStyles.pMd,
            utilityStyles.roundedXl,
            lightModeStyles.borderColor,
            utilityStyles.gLg,
            { borderWidth: 0.5 },
          ]}
        >
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <ExamLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            {examResults.data[0].exam_status == "passed" ? (
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.gSm,
                  { width: "90%" },
                ]}
              >
                <View
                  style={[
                    utilityStyles.w100,
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyBetween,
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Exam Status
                  </Text>
                  <View
                    style={[
                      utilityStyles.bgSuccess100,
                      utilityStyles.justifyCenter,
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.g2Xs,
                      {
                        paddingHorizontal: 12,
                        width: 75,
                        height: 20,
                        borderRadius: 4,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        utilityStyles.textSm,
                        { color: colorPrimitives.success[400] },
                      ]}
                    >
                      Passed
                    </Text>
                    <View>
                      <CheckFilled
                        height={15}
                        width={15}
                        color={colorPrimitives.success[400]}
                      />
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
              </View>
            ) : (
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.gSm,
                  { width: "90%" },
                ]}
              >
                <View
                  style={[
                    utilityStyles.w100,
                    utilityStyles.flexRow,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyBetween,
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Exam Status
                  </Text>
                  <View
                    style={[
                      utilityStyles.justifyCenter,
                      utilityStyles.flexRow,
                      utilityStyles.alignCenter,
                      utilityStyles.g2Xs,
                      {
                        paddingHorizontal: 10,
                        width: 72,
                        height: 20,
                        borderRadius: 4,
                        backgroundColor: colorPrimitives.danger[100],
                      },
                    ]}
                  >
                    <Text
                      style={[
                        utilityStyles.textSm,
                        { color: colorPrimitives.danger[400] },
                      ]}
                    >
                      Failed
                    </Text>
                    <View>
                      <CheckFilled
                        height={15}
                        width={15}
                        color={colorPrimitives.danger[400]}
                      />
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
              </View>
            )}
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <BookLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Course Sat
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {JSON.parse(examResults?.data[0]?.score_details).length}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <CheckLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Courses Pass
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {
                    JSON.parse(examResults?.data[0]?.score_details).filter(
                      (items) => items.grade_status == "passed"
                    ).length
                  }
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <CancelLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Courses Failed
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {
                    JSON.parse(examResults?.data[0]?.score_details).filter(
                      (items) => items.grade_status == "failed"
                    ).length
                  }
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <ExamScoreLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Total Score
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {examResults.data[0].total_score}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <ResitLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  Total Resit
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {
                    JSON.parse(examResults?.data[0]?.score_details).filter(
                      (items) => items.grade_status == "failed"
                    ).length
                  }
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: colorPrimitives.light.colorBorder,
                }}
              ></View>
            </View>
          </View>
          <View
            style={[
              utilityStyles.flexRow,
              utilityStyles.gMd,
              utilityStyles.w100,
              utilityStyles.alignStart,
            ]}
          >
            <View>
              <GpaLine color={colorPrimitives.light.colorTextPrimary} />
            </View>
            <View
              style={[
                utilityStyles.flexCol,
                utilityStyles.gSm,
                { width: "90%" },
              ]}
            >
              <View
                style={[
                  utilityStyles.w100,
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyBetween,
                ]}
              >
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  GPA
                </Text>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    lightModeStyles.textLight,
                  ]}
                >
                  {examResults.data[0].gpa}/4.00
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 0.5,
                  backgroundColor: "transparent",
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
function CaExamCard(props) {
  const resultData = props.resultData;
  const examData = props.examData;
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.pMd,
          utilityStyles.roundedXl,
          lightModeStyles.borderColor,
          utilityStyles.gXl,
          { borderWidth: 0.5 },
        ]}
      >
        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
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
                  utilityStyles.textMd,
                  utilityStyles.fontMedium,
                  lightModeStyles.textLight,
                ]}
              >
                {resultData.course_name}
              </Text>
            </View>
            {resultData.grade_status == "passed" ? (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.gXs,
                  utilityStyles.alignCenter,
                ]}
              >
                <View>
                  <CheckFilled
                    color={colorPrimitives.success[300]}
                    height={20}
                    width={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    { color: colorPrimitives.success[300] },
                  ]}
                >
                  Passed
                </Text>
              </View>
            ) : (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.gXs,
                  utilityStyles.alignCenter,
                ]}
              >
                <View>
                  <CancelFilled
                    color={colorPrimitives.danger[300]}
                    height={20}
                    width={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    { color: colorPrimitives.danger[300] },
                  ]}
                >
                  Failed
                </Text>
              </View>
            )}
          </View>
          <View
            style={[
              utilityStyles.flexCol,
              utilityStyles.alignStart,
              utilityStyles.justifyStart,
              utilityStyles.gXs,
            ]}
          >
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
                    height={20}
                    width={20}
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
                  {resultData.course_credit} Credit
                </Text>
              </View>
              <View>
                <Dot color={colorPrimitives.light.colorTextPrimary} />
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
                    height={20}
                    width={20}
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
                  {resultData.course_code}
                </Text>
              </View>
            </View>
            {resultData.grade_status == "failed" ? (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.g2Xs,
                ]}
              >
                <DoubleArrowUp
                  color={colorPrimitives.danger[400]}
                  height={20}
                  width={20}
                />
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textXs,
                    {
                      color: colorPrimitives.danger[400],
                    },
                  ]}
                >
                  High Resit Potential
                </Text>
              </View>
            ) : (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.g2Xs,
                ]}
              >
                <DoubleArrowDown
                  color={colorPrimitives.success[400]}
                  height={20}
                  width={20}
                />
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textXs,
                    {
                      color: colorPrimitives.success[400],
                    },
                  ]}
                >
                  Low Resit Potential
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}>
          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textLg,
              lightModeStyles.textLight,
            ]}
          >
            {resultData.score}/{examData.weighted_mark}
          </Text>
          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textLg,
              lightModeStyles.textLight,
            ]}
          >
            {resultData.grade}
          </Text>
        </View>
      </View>
    </>
  );
}
function ExamCard(props) {
  const resultData = props.resultData;
  const examData = props.examData;
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.pMd,
          utilityStyles.roundedXl,
          lightModeStyles.borderColor,
          utilityStyles.gXl,
          { borderWidth: 0.5 },
        ]}
      >
        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
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
                  utilityStyles.textMd,
                  utilityStyles.fontMedium,
                  lightModeStyles.textLight,
                ]}
              >
                {resultData.course_name}
              </Text>
            </View>
            {resultData.grade_status == "passed" ? (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.gXs,
                  utilityStyles.alignCenter,
                ]}
              >
                <View>
                  <CheckFilled
                    color={colorPrimitives.success[300]}
                    height={20}
                    width={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    { color: colorPrimitives.success[300] },
                  ]}
                >
                  Passed
                </Text>
              </View>
            ) : (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.gXs,
                  utilityStyles.alignCenter,
                ]}
              >
                <View>
                  <CancelFilled
                    color={colorPrimitives.danger[300]}
                    height={20}
                    width={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textSm,
                    utilityStyles.fontMedium,
                    { color: colorPrimitives.danger[300] },
                  ]}
                >
                  Failed
                </Text>
              </View>
            )}
          </View>
          <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
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
                    height={20}
                    width={20}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                  ]}
                >
                  {resultData.course_credit} Credit
                </Text>
              </View>
              <View>
                <Dot color={colorPrimitives.light.colorTextPrimary} />
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
                    height={20}
                    width={20}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                  ]}
                >
                  {resultData.course_code}
                </Text>
              </View>
            </View>
            {resultData.grade_status == "failed" && (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.g2Xs,
                ]}
              >
                <View>
                  <ResitLine
                    height={20}
                    width={20}
                    color={colorPrimitives.light.colorTextPrimary}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.fontMedium,
                    utilityStyles.textSm,
                    lightModeStyles.textLight,
                  ]}
                >
                  Resit
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}>
          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textLg,
              lightModeStyles.textLight,
            ]}
          >
            {resultData.score}/{examData.weighted_mark}
          </Text>
          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textLg,
              lightModeStyles.textLight,
            ]}
          >
            {resultData.grade}
          </Text>
        </View>
      </View>
    </>
  );
}
