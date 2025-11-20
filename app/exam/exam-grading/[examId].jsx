import { useLocalSearchParams, useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../assets/icons/Back";
import { CancelFilled } from "../../../assets/icons/CancelFilled";
import { CheckFilled } from "../../../assets/icons/CheckFilled";
import { Dot } from "../../../assets/icons/Dot";
import { DoubleArrowDown } from "../../../assets/icons/DoubleArrowDown";
import { FlagLine } from "../../../assets/icons/FlagLine";
import { ResitLine } from "../../../assets/icons/ResitLine";
import { Star } from "../../../assets/icons/Star";
import { colorPrimitives } from "../../../constants/theme";
import { useGetExamGradeScale } from "../../../hooks/api/exam/useGetExamGradeScale";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function ExamGradingScreen() {
   const router = useRouter();
    const { examId } = useLocalSearchParams();
  const { data:examGradeScale, isLoading:isExamGradeScaleLoading } = useGetExamGradeScale(examId);
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
                Exam Grade Scale
              </Text>
            </View>
            {
                isExamGradeScaleLoading ? (
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
                    <Text style={[
                  utilityStyles.textLg,
                  utilityStyles.fontMedium,
                  lightModeStyles.textLight,
                ]}>
                {examGradeScale?.data?.exam?.exam_name} Grade Scale
            </Text>
                   {
                     examGradeScale?.data?.exam?.type == "ca" ? (
                           examGradeScale?.data?.grade_scale.map((gradeScaleSlot) => (
                               <CaGradeScaleCard key={gradeScaleSlot?.id} gradeScaleSlot={gradeScaleSlot}/>
                           ))
                     ) : (
                        examGradeScale?.data?.grade_scale.map((gradeScaleSlot) => (
                               <ExamGradeScaleCard key={gradeScaleSlot?.id} gradeScaleSlot={gradeScaleSlot}/>
                           ))
                     )
                   }
                   </>
                )
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ExamGradingScreen;

function CaGradeScaleCard(props) {
  const gradeScale = props.gradeScaleSlot;
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.pMd,
          utilityStyles.roundedXl,
          lightModeStyles.borderColor,
          utilityStyles.gXl,
          { borderWidth: 0.5, height: 150 },
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
            <Text
              style={[
                utilityStyles.fontSemiBold,
                utilityStyles.textLg,
                lightModeStyles.textLight,
              ]}
            >
              {gradeScale?.grade}
            </Text>
            {gradeScale?.grade_status == "passed" ? (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.g2Xs,
                ]}
              >
                <View>
                  <CheckFilled
                    color={colorPrimitives.success[300]}
                    width={20}
                    height={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textMd,
                    utilityStyles.fontMedium,
                    { color: colorPrimitives.success[300] },
                  ]}
                >
                  Pass
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
                <View>
                  <CancelFilled
                    color={colorPrimitives.danger[300]}
                    width={20}
                    height={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textMd,
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
              utilityStyles.flexRow,
              utilityStyles.alignCenter,
              utilityStyles.gXs,
            ]}
          >
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.g2Xs,
              ]}
            >
              <View>
                <FlagLine
                  color={colorPrimitives.light.colorTextPrimary}
                  width={18}
                  height={18}
                />
              </View>
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                {gradeScale?.determinant}
              </Text>
            </View>
            <View>
              <Dot
                color={colorPrimitives.light.colorTextPrimary}
                width={18}
                height={18}
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
                <Star
                  color={colorPrimitives.light.colorTextPrimary}
                  width={18}
                  height={18}
                />
              </View>
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                {gradeScale?.grade_point}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.alignCenter,
            utilityStyles.justifyBetween,
            { marginTop: "auto" },
          ]}
        >
          {gradeScale?.grade_status == "passed" ? (
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.g2Xs,
              ]}
            >
              <View>
                <DoubleArrowDown
                  width={18}
                  height={18}
                  color={colorPrimitives.success[300]}
                />
              </View>
              <Text
                style={[
                  utilityStyles.textSm,
                  utilityStyles.fontMedium,
                  { color: colorPrimitives.success[300] },
                ]}
              >
                Low Resit Potential
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
              <View>
                <DoubleArrowDown
                  width={18}
                  height={18}
                  color={colorPrimitives.success[300]}
                />
              </View>
              <Text
                style={[
                  utilityStyles.textSm,
                  utilityStyles.fontMedium,
                  { color: colorPrimitives.success[300] },
                ]}
              >
                Low Resit Potential
              </Text>
            </View>
          )}

          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textMd,
              lightModeStyles.textLight,
            ]}
          >
            {gradeScale?.minimum_score} - {gradeScale?.maximum_score}
          </Text>
        </View>
      </View>
    </>
  );
}
function ExamGradeScaleCard(props) {
  const gradeScale = props.gradeScaleSlot;
  return (
    <>
      <View
        style={[
          utilityStyles.flexCol,
          utilityStyles.pMd,
          utilityStyles.roundedXl,
          lightModeStyles.borderColor,
          utilityStyles.gXl,
          { borderWidth: 0.5, height: 150 },
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
            <Text
              style={[
                utilityStyles.fontSemiBold,
                utilityStyles.textLg,
                lightModeStyles.textLight,
              ]}
            >
              {gradeScale?.grade}
            </Text>
            {gradeScale?.grade_status == "passed" ? (
              <View
                style={[
                  utilityStyles.flexRow,
                  utilityStyles.alignCenter,
                  utilityStyles.g2Xs,
                ]}
              >
                <View>
                  <CheckFilled
                    color={colorPrimitives.success[300]}
                    width={20}
                    height={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textMd,
                    utilityStyles.fontMedium,
                    { color: colorPrimitives.success[300] },
                  ]}
                >
                  Pass
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
                <View>
                  <CancelFilled
                    color={colorPrimitives.danger[300]}
                    width={20}
                    height={20}
                  />
                </View>
                <Text
                  style={[
                    utilityStyles.textMd,
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
              utilityStyles.flexRow,
              utilityStyles.alignCenter,
              utilityStyles.gXs,
            ]}
          >
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.g2Xs,
              ]}
            >
              <View>
                <FlagLine
                  color={colorPrimitives.light.colorTextPrimary}
                  width={18}
                  height={18}
                />
              </View>
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                {gradeScale?.determinant}
              </Text>
            </View>
            <View>
              <Dot
                color={colorPrimitives.light.colorTextPrimary}
                width={18}
                height={18}
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
                <Star
                  color={colorPrimitives.light.colorTextPrimary}
                  width={18}
                  height={18}
                />
              </View>
              <Text
                style={[
                  utilityStyles.fontMedium,
                  utilityStyles.textSm,
                  lightModeStyles.textLight,
                ]}
              >
                {gradeScale?.grade_point}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            utilityStyles.flexRow,
            utilityStyles.alignCenter,
            utilityStyles.justifyBetween,
            { marginTop: "auto" },
          ]}
        >
          {gradeScale?.grade_status == "failed" ? (
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.gXs,
              ]}
            >
              <View>
                <ResitLine
                  width={18}
                  height={18}
                  color={colorPrimitives.danger[300]}
                />
              </View>
              <Text
                style={[
                  utilityStyles.textSm,
                  utilityStyles.fontMedium,
                  { color: colorPrimitives.danger[300] },
                ]}
              >
                Resit
              </Text>
            </View>
          ) : (
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.gXs,
              ]}
            >
              <View>
                <ResitLine
                  width={18}
                  height={18}
                  color={colorPrimitives.success[300]}
                />
              </View>
              <Text
                style={[
                  utilityStyles.textSm,
                  utilityStyles.fontMedium,
                  { color: colorPrimitives.success[300] },
                ]}
              >
                No Resit
              </Text>
            </View>
          )}
          <Text
            style={[
              utilityStyles.fontSemiBold,
              utilityStyles.textMd,
              lightModeStyles.textLight,
            ]}
          >
            {gradeScale?.minimum_score} - {gradeScale?.maximum_score}
          </Text>
        </View>
      </View>
    </>
  );
}
