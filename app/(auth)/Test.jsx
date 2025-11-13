import { useRef, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/ui/input/input";
import { utilityStyles } from "../../styles/utility";
function TestScreen() {
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
     email:"",
     password:""
  })
   return (
    <>
      <SafeAreaView
        style={[
          utilityStyles.flex1,
          utilityStyles.flexCol,
          { backgroundColor: "#ffff" },
        ]}
      >
      <View style={{paddingInline:20}}> 
           <Input
        ref={emailRef}
        type="email"
        value={email}
        onChangeText={setEmail}
      />
      </View>
      </SafeAreaView>
    </>
  );
}
export default TestScreen;
