import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Back } from "../../assets/icons/Back";
import { CalendarFilled } from "../../assets/icons/CalendarFilled";
import { DepartmentFilled } from "../../assets/icons/DepartmentFilled";
import { Dot } from "../../assets/icons/Dot";
import { EditLine } from "../../assets/icons/EditLine";
import { EmailFilled } from "../../assets/icons/EmailFilled";
import { IDFilled } from "../../assets/icons/IDFilled";
import { LevelFilled } from "../../assets/icons/LevelFilled";
import { ParentFilled } from "../../assets/icons/ParentFilled";
import { PhoneFilled } from "../../assets/icons/PhoneFilled";
import { SchoolFilled } from "../../assets/icons/SchoolFilled";
import { StepFilled } from "../../assets/icons/StepFilled";
import { UserDetailFilled } from "../../assets/icons/UserDetailFilled";
import { UserFilled } from "../../assets/icons/UserFilled";
import { VericationBadgeFilled } from "../../assets/icons/VerificationBadgeFilled";
import { colorPrimitives } from "../../constants/theme";
import { useGetProfileDetail } from "../../hooks/api/profile/useGetProfileDetails";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
import { formatDateAndCalculateAge } from "../../utils/functions";
function ProfileScreen() {
  const userImage = require("../../assets/images/user.jpg");
    const authUser = useSelector((state) => state.auth.user);
  const { data:profileDetails, isLoading:isProfileDetailsLoading } = useGetProfileDetail(authUser.id);
  const router = useRouter();
  console.log(profileDetails?.data);
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
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.alignCenter,
                utilityStyles.justifyBetween,
              ]}
            >
              <Pressable onPress={() => router.push("/Home")}>
                <Back
                  width={24}
                  height={24}
                  color={colorPrimitives.light.colorTextPrimary}
                />
              </Pressable>
              <View>
                <Text
                  style={[
                    utilityStyles.textLg,
                    utilityStyles.fontBold,
                    lightModeStyles.textLight,
                    {
                      lineHeight: 24,
                    },
                  ]}
                >
                  My Account
                </Text>
              </View>
              <Pressable>
                <EditLine color={colorPrimitives.light.colorTextPrimary} />
              </Pressable>
            </View>
            
            {
                 isProfileDetailsLoading ? (
                     <View>
                        <Text style={[utilityStyles.textCenter]}>Loading.........</Text>
                    </View>
                 ) : (
                     <>
                      <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                ]}
              >
                <Image
                  source={userImage}
                  style={{ width: 150, height: 150, borderRadius: 999 }}
                />
              </View>
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.gXs,
                  utilityStyles.alignCenter,
                  utilityStyles.justifyCenter,
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.gSm,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.textMd,
                      utilityStyles.fontSemiBold,
                      lightModeStyles.textLight,
                    ]}
                  >
                    {profileDetails?.data?.name}
                  </Text>
                  <View>
                    <VericationBadgeFilled
                      color={colorPrimitives.primary[400]}
                    />
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.g2Xs,
                    utilityStyles.alignCenter,
                  ]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Public Relations Officer
                  </Text>
                  <View>
                    <Dot
                      width={16}
                      height={16}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                    ]}
                  >
                    Class Rep
                  </Text>
                </View>
              </View>
            </View>

            <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
              <Text
                style={[
                  utilityStyles.fontSemiBold,
                  utilityStyles.textMd,
                  lightModeStyles.textLight,
                ]}
              >
                General Info
              </Text>
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.pMd,
                  utilityStyles.roundedXl,
                  lightModeStyles.borderColor,
                  utilityStyles.gSm,
                  { borderWidth: 0.5 },
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <SchoolFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          School Name
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          {profileDetails?.data?.schoolbranches?.name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <DepartmentFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Department
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          {profileDetails?.data?.department?.department_name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <LevelFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Specialty
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         {profileDetails?.data?.specialty?.specialty_name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <StepFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Level
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          {profileDetails?.data?.level?.name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                 <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <IDFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         Matricule Number
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         MAT-2024-045678
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

             <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
              <Text
                style={[
                  utilityStyles.fontSemiBold,
                  utilityStyles.textMd,
                  lightModeStyles.textLight,
                ]}
              >
                Personal Info
              </Text>
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.pMd,
                  utilityStyles.roundedXl,
                  lightModeStyles.borderColor,
                  utilityStyles.gSm,
                  { borderWidth: 0.5 },
                ]}
              >
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <UserDetailFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          First Name
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          {profileDetails?.data?.first_name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <UserDetailFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Last Name
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          {profileDetails?.data?.last_name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <UserFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Full Names
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         {profileDetails?.data?.name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <ParentFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Guardian Name
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         {profileDetails?.data?.guardian?.name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                 <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <PhoneFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                        Phone Number
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         {profileDetails?.data?.phone_one}
                        </Text>
                      </View>
                    </View>
                     <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <CalendarFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                        Date Of Birth
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         {profileDetails.data.DOB ? formatDateAndCalculateAge(profileDetails?.data?.DOB) : "Add Date Of Birth"}
                        </Text>
                      </View>
                    </View>
                     <View
                      style={{
                        width: "95%",
                        height: 0.5,
                        backgroundColor: colorPrimitives.light.colorBorder,
                      }}
                    ></View>
                  </View>
                </View>
                 <View
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                >
                  <View style={[utilityStyles.w10]}>
                    <EmailFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.light.colorTextPrimary}
                    />
                  </View>
                  <View
                    style={[
                      utilityStyles.flexCol,
                      utilityStyles.w90,
                      utilityStyles.gXs,
                    ]}
                  >
                    <View
                      style={[
                        utilityStyles.flexRow,
                        utilityStyles.alignCenter,
                        utilityStyles.justifyBetween,
                        lightModeStyles.borderColor,
                        {
                          paddingEnd: 10,
                        },
                      ]}
                    >
                      <View style={[utilityStyles.flexCol]}>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                        Email
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontSemiBold,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         {profileDetails?.data?.email}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
                     </>
                 )
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default ProfileScreen;
