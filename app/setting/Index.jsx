import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AdditionalFeeFilled } from "../../assets/icons/AdditionalFeeFilled";
import { Back } from "../../assets/icons/Back";
import { BellFilled } from "../../assets/icons/BellFilled";
import { CacheFilled } from "../../assets/icons/CacheFilled";
import { ElectionFilled } from "../../assets/icons/ElectionFilled";
import { FormFilled } from "../../assets/icons/FormFilled";
import { Forward } from "../../assets/icons/Forward";
import { LogoutFilled } from "../../assets/icons/LogoutFilled";
import { PasswordFilled } from "../../assets/icons/PasswordFilled";
import { StructureFilled } from "../../assets/icons/StructureFilled";
import { TransactionFilled } from "../../assets/icons/TransactionFilled";
import { UserPlusFilled } from "../../assets/icons/UserPlusFilled";
import { VersionFilled } from "../../assets/icons/Version";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function SettingScreen() {
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
            <Pressable
             onPress={() => router.push("/Home")}
            >
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
                Settings
              </Text>
            </View>
            <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
              <Text
                style={[
                  utilityStyles.fontSemiBold,
                  utilityStyles.textMd,
                  lightModeStyles.textLight,
                ]}
              >
                Finances
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
                    
                    <StructureFilled
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
                          Tuition Fee Payment Structure
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Understand your tuition breakdown
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
                    <AdditionalFeeFilled
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
                          Additional Fees
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          View miscellaneous charges here.
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
                    <UserPlusFilled
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
                          Registration Fees
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Details on enrollment charges.
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
                <Pressable
                  style={[
                    utilityStyles.flexRow,
                    utilityStyles.w100,
                    utilityStyles.alignCenter,
                    utilityStyles.gSm,
                  ]}
                  onPress={() => alert("Hello World")}
                >
                  <View style={[utilityStyles.w10]}>
                    <TransactionFilled
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
                          Financial Transactions
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Overview of all payments and refunds.
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                      </View>
                    </View>
                  </View>
                </Pressable>
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
                Elections
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
                    <ElectionFilled
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
                          Election Result
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                         View the latest election outcomes
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
                    <FormFilled
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
                          My Applications
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Check the status of your filed applications
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
                Security Settings
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
                    <PasswordFilled
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
                          Change Password
                        </Text>
                        <View style={{width:"90%"}}>
                          <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Enhance your account security by updating your password
                        </Text>
                        </View>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
              General Setting
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
                    <VersionFilled
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
                          App Version
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          v2.1.3
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
                    <CacheFilled
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
                         App Cache
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Free up space by clearing app data
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
                    <BellFilled
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
                          Notifications
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Manage Push Notifications
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
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
                    <LogoutFilled
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
                          Logout
                        </Text>
                        <Text
                          style={[
                            utilityStyles.fontRegular,
                            utilityStyles.textSm,
                            lightModeStyles.textLight,
                          ]}
                        >
                          Sign Out From Your Account
                        </Text>
                      </View>
                      <View>
                        <Forward
                          width={18}
                          height={18}
                          color={colorPrimitives.light.colorTextPrimary}
                        />
                      </View>
                    </View>
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
export default SettingScreen;
