import { colorPrimitives } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const darkModeStyles = StyleSheet.create({
     colorPrimary:{ color:colorPrimitives.dark.colorPrimary },
     bgPrimary:{ backgroundColor:colorPrimitives.dark.colorPrimary },
     bgLight:{ backgroundColor:colorPrimitives.dark.colorBackground },
     textLight: { color:colorPrimitives.dark.colorTextPrimary },
     bgSurface: { backgroundColor:colorPrimitives.dark.colorSurface },
     borderColor: { borderColor:colorPrimitives.dark.colorBorder }
})