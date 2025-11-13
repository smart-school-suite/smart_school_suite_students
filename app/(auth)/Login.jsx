import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginImg } from "../../assets/svgImages/loginImg";
import Input from "../../components/ui/input/input";
import { useAuth } from "../../context/authContext";
import { lightModeStyles } from "../../styles/theme/light";
import { utilityStyles } from "../../styles/utility";
function LoginScreen() {
  const router = useRouter();
  const { handleLogin, loading } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [formData, setFormData] = useState({
      email:"",
      password:""
  })
  const handleSubmit = async () => {
     const { email, password } = formData;
     await handleLogin(email, password, router);
  }

  const handleStateChange = (field, value, stateFn) => {
      stateFn((prev) => ({...prev, [field]:value}))
  }
   return (
    <>
      <SafeAreaView
        style={[
          utilityStyles.flex1,
          utilityStyles.flexCol,
          { backgroundColor: "#ffff" },
        ]}
      >
        <View style={[utilityStyles.flexCol, utilityStyles.gXl, {paddingInline:20, paddingTop:50}]}>
          <View style={[utilityStyles.flexCol, utilityStyles.gNone]}>
            <Text
              style={[
                utilityStyles.fontBold,
                lightModeStyles.textLight,
                utilityStyles.text4Xl,
                utilityStyles.mNone,
              ]}
            >
              Welcome Back
            </Text>
            <Text
              style={[
                utilityStyles.fontMedium,
                lightModeStyles.textLight,
                utilityStyles.textMd,
                utilityStyles.mNone,
              ]}
            >
              Login To Your Account
            </Text>
          </View>
          <View style={[utilityStyles.flexRow, utilityStyles.justifyCenter, utilityStyles.alignCenter]}>
            <View style={{width:250, height:165}}>
              <LoginImg  width={"100%"} height={"100%"}/>
            </View>
          </View>
          <View style={[utilityStyles.flexCol, utilityStyles.gLg]}>
            <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
            <Text style={[lightModeStyles.textLight, utilityStyles.fontMedium, ]}>Email</Text>
             <Input
                    ref={emailRef}
                    type="email"
                    value={formData.email}
                    onChangeText={(newText) => handleStateChange('email', newText, setFormData)}
              />
          </View>
          <View style={[utilityStyles.flexCol, utilityStyles.g2Xs]}>
            <View style={[utilityStyles.flexRow, utilityStyles.alignCenter, utilityStyles.justifyBetween]}>
               <Text style={[lightModeStyles.textLight, utilityStyles.fontMedium ]}>Password</Text>
               <Pressable 
                onPress={() => router.navigate('/PasswordReset')}
               style={[utilityStyles.flexRow, utilityStyles.alignCenter, utilityStyles.gXs]}>
                  <Text style={[utilityStyles.fontRegular, utilityStyles.textXm]}>Password Forgotton?</Text>
                  <Text style={[utilityStyles.fontRegular, lightModeStyles.colorPrimary, utilityStyles.textXm]}>Recover</Text>
               </Pressable>
            </View>
            <Input 
              ref={passwordRef}
                    type="password"
                    value={formData.password}
                    onChangeText={(newText) => handleStateChange('password', newText, setFormData)}
            />
          </View>
          <TouchableOpacity
            style={[
              lightModeStyles.bgPrimary,
              utilityStyles.w100,
              utilityStyles.roundedCircle,
              {
                height: 58,
                padding: 20,
              },
            ]}
            onPress={() => handleSubmit()}
          >
            <View
              style={[
                utilityStyles.flexRow,
                utilityStyles.gSm,
                utilityStyles.alignCenter,
                utilityStyles.justifyCenter,
              ]}
            >
              <Text
                style={[
                  utilityStyles.textSm,
                  lightModeStyles.colorOnPrimary,
                  utilityStyles.fontSemiBold,
                ]}
              >
                Login
              </Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
export default LoginScreen;
