import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import { FeatImg } from '../../assets/svgImages/featImg';
import { lightModeStyles } from '../../styles/theme/light';
import { utilityStyles } from '../../styles/utility';
function OnboardScreen(){
   const router = useRouter();
     return (
        <>
        <View style={[utilityStyles.flex1, utilityStyles.flexCol, {backgroundColor:"#ffff"}]}>
          <View style={[utilityStyles.flex1]} >
            <View style={[utilityStyles.w100, utilityStyles.h100]}>
              <FeatImg width={"100%"} height={"100%"}/>
            </View>
          </View>
           <SafeAreaView style={[utilityStyles.flex1]}>
          <View style={{ paddingInline:20, flex:1, flexDirection:'column'}}>
             <View style={{ marginTop:'auto', flexDirection:'column', gap:16 }}>
              <View style={[ utilityStyles.flexCol, utilityStyles.gMd]}>
                <Text style={[utilityStyles.text4Xl, lightModeStyles.textLight, utilityStyles.fontBold ]}>
                  Smart School Suite All Your School In One
                </Text>
                <Text style={[utilityStyles.textMd, lightModeStyles.textLight, utilityStyles.fontRegular,]}>
                  Access your school timetable, monitor your progress, and never miss an important event or deadline again.
                </Text>
              </View>
           <TouchableOpacity
             style={[lightModeStyles.bgPrimary, utilityStyles.w100, utilityStyles.roundedCircle, {
               height:58,
               padding:20
             } ]}
             onPress={() => router.navigate('/Login')}
           >
             <View style={[utilityStyles.flexRow, utilityStyles.gSm, utilityStyles.alignCenter, utilityStyles.justifyCenter]}>
              <Text style={[utilityStyles.textSm, lightModeStyles.colorOnPrimary, utilityStyles.fontSemiBold]}>Sign Up</Text>
             </View>
           </TouchableOpacity>
             </View>
          </View>
        </SafeAreaView>
        </View>
        </>
     )
}
export default OnboardScreen;