import { borderRadiusPrimitives } from "@/constants/radius";
import { spacingPrimitives } from "@/constants/spacing";
import { colorPrimitives } from "@/constants/theme";
import { typograpyPrimitives } from "@/constants/typograpy";
import { StyleSheet } from "react-native";
export const utilityStyles = StyleSheet.create({
  flex1: { flex: 1 },
  flexRow: { flexDirection: "row" },
  flexCol: { flexDirection: "column" },
  justifyCenter: { justifyContent: "center" },
  justifyBetween: { justifyContent: "space-between" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyStart: { justifyContent: "flex-start" },
  alignCenter: { alignItems: "center" },
  alignEnd: { alignItems: "flex-end" },
  alignStart: { alignItems: "flex-start" },

  pNone: { padding: spacingPrimitives.none },
  pXs: { padding: spacingPrimitives["xs"] },
  pSm: { padding: spacingPrimitives["sm"] },
  pMd: { padding: spacingPrimitives["md"] },
  pLg: { padding: spacingPrimitives["lg"] },
  pXl: { padding: spacingPrimitives["xl"] },

  mNone: { margin: spacingPrimitives.none },
  mXs: { margin: spacingPrimitives.xs },
  mSm: { margin: spacingPrimitives.sm },
  mMd: { margin: spacingPrimitives.md },
  mLg: { margin: spacingPrimitives.lg },
  mXl: { margin: spacingPrimitives.xl },

  gNone: { gap: spacingPrimitives.none },
  g2Xs: { gap: spacingPrimitives["2xs"]},
  gXs: { gap: spacingPrimitives.xs },
  gSm: { gap: spacingPrimitives.sm },
  gMd: { gap: spacingPrimitives.md },
  gLg: { gap: spacingPrimitives.lg },
  gXl: { gap: spacingPrimitives.xl },

  roundedNone: { borderRadius: borderRadiusPrimitives.none },
  roundedSm: { borderRadius: borderRadiusPrimitives.sm },
  roundedMd: { borderRadius: borderRadiusPrimitives.md },
  roundedLg: { borderRadius: borderRadiusPrimitives.lg },
  roundedXl: { borderRadius: borderRadiusPrimitives.xl },
  rounded2Xl: { borderRadius: borderRadiusPrimitives["2xl"] },
  rounded3Xl: { borderRadius: borderRadiusPrimitives["3xl"] },
  roundedCircle: { borderRadius: borderRadiusPrimitives["full"] },

  textSm: { fontSize: typograpyPrimitives.sm },
  textXs: { fontSize: typograpyPrimitives.xs },
  text2Xs: { fontSize: typograpyPrimitives["2xs"]},
  textMd: { fontSize: typograpyPrimitives.md },
  textLg: { fontSize: typograpyPrimitives.lg },
  textXl: { fontSize: typograpyPrimitives.xl },
  text2Xl: { fontSize: typograpyPrimitives["2xl"] },
  text3Xl: { fontSize: typograpyPrimitives["3xl"] },
  text4Xl: { fontSize: typograpyPrimitives["4xl"] },
 
  textCapitalize: {
     textTransform:"capitalize"
  },
  textUpperCase: {
     textTransform:"uppercase"
  },
  absolute: { position: "absolute" },
  relative: { position: "relative" },

  w100: { width: "100%" },
  w90: { width: "90%" },
  w80: { width: "80%" },
  w75: { width: "75%" },
  w70: { width: "70%" },
  w60: { width: "60%" },
  w50: { width: "50%" },
  w40: { width: "40%" },
  w30: { width: "30%" },
  w25: { width: "25%" },
  w20: { width: "20%" },
  w10: { width: "10%" },
  w5: { width: "5%" },

  h100: { height: "100%" },
  h90: { height: "90%" },
  h80: { height: "80%" },
  h75: { height: "75%" },
  h70: { height: "70%" },
  h60: { height: "60%" },
  h50: { height: "50%" },
  h40: { height: "40%" },
  h30: { height: "30%" },
  h25: { height: "25%" },
  h20: { height: "20%" },
  h10: { height: "10%" },
  h5: { height: "5%" },

  borderBottom: { borderBottomWidth: 0.5 },
  borderBottom1: { borderBottomWidth: 1 },

  cover: { resizeMode: "cover" },
  contain: { resizeMode: "contain" },
  stretch: { resizeMode: "stretch" },
  repeat: { resizeMode: "repeat" },

  textCenter:{ textAlign:"center"},
  textEnd:{textAlign:"left"},
  textStart:{textAlign:"right"},

  colorPrimary50: { color: colorPrimitives.primary[50] },
  colorPrimary100: { color: colorPrimitives.primary[100] },
  colorPrimary200: { color: colorPrimitives.primary[200] },
  colorPrimary300: { color: colorPrimitives.primary[300] },
  colorPrimary400: { color: colorPrimitives.primary[400] },

  bgPrimary50: { backgroundColor: colorPrimitives.primary[50] },
  bgPrimary100: { backgroundColor: colorPrimitives.primary[100] },
  bgPrimary200: { backgroundColor: colorPrimitives.primary[200] },
  bgPrimary300: { backgroundColor: colorPrimitives.primary[300] },

  colorSuccess50: { color: colorPrimitives.success[50] },
  colorSuccess100: { color: colorPrimitives.success[100] },
  colorSuccess200: { color: colorPrimitives.success[200] },
  colorSuccess300: { color: colorPrimitives.success[300] },
  colorSuccess400: { color: colorPrimitives.success[400]},

  bgSuccess50: { backgroundColor: colorPrimitives.success[50] },
  bgSuccess100: { backgroundColor: colorPrimitives.success[100] },
  bgSuccess200: { backgroundColor: colorPrimitives.success[200] },
  bgSuccess300: { backgroundColor: colorPrimitives.success[300] },
  bgSuccess400: { backgroundColor: colorPrimitives.success[400] },

  fontRegular: {
    fontFamily: "Poppins_400Regular",
  },
  fontMedium: {
    fontFamily: "Poppins_500Medium",
  },
  fontSemiBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  fontBold: {
    fontFamily: "Poppins_700Bold",
  },
});
