import { useState } from "react";
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
import { Dot } from "../../assets/icons/Dot";
import { Hash } from "../../assets/icons/Hash";
import { Option } from "../../assets/icons/Option";
import { Star } from "../../assets/icons/Star";
import { colorPrimitives } from "../../constants/theme";
import { useGetAllCourses } from "../../hooks/api/course/useGetAllCourses";
import { useGetCoursesBySemester } from "../../hooks/api/course/useGetCoursesBySemester";
import { useGetSemesters } from "../../hooks/api/semester/useGetSemesters";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function CourseScreen() {
  const authUser = useSelector((state) => state.auth.user);
  const userImage = require("../../assets/images/user.jpg");
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
            <Text
              style={[
                utilityStyles.text4Xl,
                utilityStyles.fontBold,
                lightModeStyles.textLight,
              ]}
            >
              Courses
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                columnGap: 12,
              }}
            >
              {isSemesterLoading ? (
                <Text>loading.........</Text>
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
            {
               tab.id == "all" ? 
               <AllCourses  studentId={authUser.id} userImage={userImage}/> 
               : 
               <DynamicCourses tab={tab} studentId={authUser.id} userImage={userImage} />
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default CourseScreen;

function AllCourses({ studentId, userImage }){
    const { data: allCourses, isLoading: isAllCoursesLoading } = useGetAllCourses(
    studentId
  );
   return (
     <>
      {isAllCoursesLoading ? (
              <Text>Course Loading........................</Text>
            ) : (
              <>
                {allCourses.data.map((items) => (
                  <View
                    style={[utilityStyles.flexCol, utilityStyles.gSm]}
                    key={items.semesterId}
                  >
                    <View>
                      <Text
                        style={[
                          lightModeStyles.textLight,
                          utilityStyles.textMd,
                          utilityStyles.fontSemiBold,
                        ]}
                      >
                        {items?.semester}
                      </Text>
                    </View>
                    {items?.courses?.map((course) => (
                      <CourseCard
                        data={course}
                        userImage={userImage}
                        key={course.id}
                      />
                    ))}
                  </View>
                ))}
              </>
            )}
     </>
   )
}
function DynamicCourses({ tab, studentId, userImage }) {
  const { data: courses, isLoading: isCoursesLoading } =
    useGetCoursesBySemester(studentId, tab?.id);
  return (
    <>
      <View
        style={[utilityStyles.flexCol, utilityStyles.gSm]}
      >
        {isCoursesLoading ? (
          <Text>Course Loading........</Text>
        ) : (
          <>
            {courses?.data.map((course) => (
              <CourseCard data={course} userImage={userImage} key={course.id}/>
            ))}
          </>
        )}
      </View>
    </>
  );
}
function CourseCard({ data, userImage }) {
  return (
    <>
      <View
        style={[
          utilityStyles.roundedXl,
          utilityStyles.pMd,
          lightModeStyles.borderColor,
          utilityStyles.flexCol,
          utilityStyles.gMd,
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
              { minWidth: 75, width: 50, height: 25 },
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
                {data?.course_title}
              </Text>
            </View>
            <View>
              <Option
                width={20}
                height={20}
                color={colorPrimitives.light.colorTextPrimary}
              />
            </View>
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
                {data?.credit} Credit
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
                {data?.course_code}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[
              lightModeStyles.textLight,
              utilityStyles.textSm,
              utilityStyles.fontMedium,
              {
                letterSpacing: 0.2,
                lineHeight: 20,
              },
            ]}
          >
            {data?.description}
          </Text>
        </View>
        <View>
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
            <View style={[utilityStyles.flexCol]}>
              <Text
                style={[
                  lightModeStyles.textLight,
                  utilityStyles.textSm,
                  utilityStyles.fontMedium,
                ]}
              >
                Dr. Alex Johnson
              </Text>
              <Text
                style={[
                  lightModeStyles.textLight,
                  utilityStyles.textSm,
                  utilityStyles.fontMedium,
                ]}
              >
                Bachelor's Degree
              </Text>
            </View>
          </View>
        </View>
      </View>
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
