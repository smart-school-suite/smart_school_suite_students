import { useRouter } from "expo-router";
import {
   Image,
   Pressable,
   ScrollView,
   Text,
   View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../assets/icons/Back";
import { HeartLine } from "../../assets/icons/HeartLine";
import { colorPrimitives } from "../../constants/theme";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function ElectionVotingScreen(){
     const router = useRouter();
     const userImage = require("../../assets/images/user.jpg");
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
                          utilityStyles.text4Xl,
                          utilityStyles.fontBold,
                          lightModeStyles.textLight,
                        ]}
                      >
                        Election Voting
                      </Text>
                    </View>
                    <View>
                      <Text style={[utilityStyles.textMd, utilityStyles.fontMedium, lightModeStyles.textLight, {lineHeight:26, letterSpacing:0.2}]}>
                        Vote  for your favorite candidate  of 2025 - 2026 Student union Government Election
                      </Text>
                    </View>
                    <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                      <Text style={[utilityStyles.textLg, utilityStyles.fontBold, lightModeStyles.textLight, {lineHeight:26, letterSpacing:0.2}]}>Student Body President</Text>
                      <ScrollView horizontal={true} contentContainerStyle={{
                    columnGap: 12
                  }}>
                        <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                                      <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                                      <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                      </ScrollView>
                    </View>
                     <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                      <Text style={[utilityStyles.textLg, utilityStyles.fontBold, lightModeStyles.textLight, {lineHeight:26, letterSpacing:0.2}]}>Student Vice President</Text>
                      <ScrollView horizontal={true} contentContainerStyle={{
                    columnGap: 12
                  }}>
                        <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                                      <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                                      <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                      </ScrollView>
                    </View>
                    <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
                      <Text style={[utilityStyles.textLg, utilityStyles.fontBold, lightModeStyles.textLight, {lineHeight:26, letterSpacing:0.2}]}>Student Body President</Text>
                      <ScrollView horizontal={true} contentContainerStyle={{
                    columnGap: 12
                  }}>
                        <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                                      <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                                      <View style={[utilityStyles.flexCol, utilityStyles.gSm, {width:350, height:'auto', maxHeight:400}]}>
                                        <Image 
                                          source={userImage}
                                          style={{width:"100%",  height:300, borderRadius:24, resizeMode:"center"}}
                                        />
                                        <View style={[utilityStyles.flexCol, utilityStyles.gXs]}>
                                           <View
                                          style={[
                                            utilityStyles.flexRow,
                                            utilityStyles.justifyBetween,
                                            utilityStyles.alignCenter,
                                          ]}
                                        >
                                           <Text
                                              style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textLg,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                              Jana Zulauf
                                            </Text>
                                          <View
                                            style={[
                                              utilityStyles.flexRow,
                                              utilityStyles.gXs,
                                              utilityStyles.alignCenter,
                                            ]}
                                          >
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textXl,
                                                lightModeStyles.textLight,
                                              ]}>200</Text>
                                            <Text style={[
                                                utilityStyles.fontSemiBold,
                                                utilityStyles.textSm,
                                                lightModeStyles.textLight,
                                              ]}>Votes</Text>
                                          </View>
                                        </View>
                                        <View style={[utilityStyles.flexRow, utilityStyles.justifyBetween, utilityStyles.alignCenter]}>
                                           <Text
                                              style={[
                                                utilityStyles.fontMedium,
                                                utilityStyles.textMd,
                                                lightModeStyles.textLight,
                                              ]}
                                            >
                                             Cyber Security, Level 100
                                            </Text>
                                            <HeartLine   
                                             width={24}
                                                    height={24}
                                                    color={colorPrimitives.light.colorTextPrimary}/>
                                        </View>
                                        </View>
                                      </View>
                      </ScrollView>
                    </View>
                    </View>
                    </ScrollView>
                    </SafeAreaView>
        </>
     )
}
export default ElectionVotingScreen;