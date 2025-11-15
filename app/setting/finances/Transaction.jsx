import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../assets/icons/Back";
import { BrokenLine } from "../../../assets/icons/BrokenLine";
import { CheckFilled } from "../../../assets/icons/CheckFilled";
import { colorPrimitives } from "../../../constants/theme";
import { lightModeStyles } from "../../../styles/theme/light";
import { utilityStyles } from "../../../styles/utility";
function TransactionScreen() {
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
            <Pressable onPress={() => router.push("/setting")}>
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
                Transactions
              </Text>
            </View>
            {
               [...Array(7)].map((items, index) => (
                  <View
              style={[
                utilityStyles.roundedXl,
                utilityStyles.pMd,
                lightModeStyles.borderColor,
                utilityStyles.flexCol,
                utilityStyles.gMd,
                { backgroundColor: "#fff", borderWidth: 0.5 },
              ]}
              key={index}
            >
              <View
                style={[
                  utilityStyles.flexCol,
                  utilityStyles.justifyCenter,
                  utilityStyles.alignCenter,
                  utilityStyles.gMd,
                ]}
              >
                <View
                  style={[
                    utilityStyles.roundedCircle,
                    utilityStyles.bgSuccess100,
                    utilityStyles.flexCol,
                    utilityStyles.alignCenter,
                    utilityStyles.justifyCenter,
                    { width: 50, height: 50 },
                  ]}
                >
                  <View>
                    <CheckFilled
                      width={24}
                      height={24}
                      color={colorPrimitives.success[400]}
                    />
                  </View>
                </View>
                <View
                  style={[utilityStyles.flexCol, utilityStyles.justifyCenter]}
                >
                  <View>
                    <Text
                      style={[
                        utilityStyles.textSm,
                        utilityStyles.fontMedium,
                        lightModeStyles.textLight,
                        utilityStyles.textCenter,
                      ]}
                    >
                      Payment Success
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        utilityStyles.text4Xl,
                        utilityStyles.fontBold,
                        lightModeStyles.textLight,
                        utilityStyles.textCenter,
                      ]}
                    >
                      100,000 ₣
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                <View
                  style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Transaction ID
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    #TUI-398-382-8389
                  </Text>
                </View>
                <View
                  style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Payment Date
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    20 Jan 2026, 8:00 AM
                  </Text>
                </View>
                <View
                  style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Payment Title
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Tuition Fee
                  </Text>
                </View>
                <View
                  style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Payer Name
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Chongong Precious Gemuh
                  </Text>
                </View>
              </View>
              <View>
               <BrokenLine  width={"100%"} height={2} color={colorPrimitives.light.colorBorder} />
              </View>
               <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                <View
                  style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Amount
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    100,000 ₣
                  </Text>
                </View>
                <View
                  style={[utilityStyles.flexRow, utilityStyles.justifyBetween]}
                >
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Payment Method
                  </Text>
                  <Text
                    style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}
                  >
                    Cash Payment
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={[utilityStyles.roundedMd, utilityStyles.pMd, {borderWidth:1, borderColor:colorPrimitives.light.colorTextPrimary}]}>
                <Text  style={[
                      utilityStyles.textSm,
                      utilityStyles.fontMedium,
                      lightModeStyles.textLight,
                      utilityStyles.textCenter,
                    ]}>Download PDF Reciept</Text>
              </TouchableOpacity>
            </View>
               ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default TransactionScreen;
