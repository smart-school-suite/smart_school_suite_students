import { colorPrimitives } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const lightModeStyles = StyleSheet.create({
     colorPrimary:{ color:colorPrimitives.light.colorPrimary },
     bgPrimary:{ backgroundColor:colorPrimitives.light.colorPrimary },
     bgLight:{ backgroundColor:colorPrimitives.light.colorBackground },
     textLight: { color:colorPrimitives.light.colorTextPrimary },
     bgSurface: { backgroundColor:colorPrimitives.light.colorSurface },
     borderColor: { borderColor:colorPrimitives.light.colorBorder },
     colorOnPrimary: { color:colorPrimitives.light.colorOnPrimary}
})