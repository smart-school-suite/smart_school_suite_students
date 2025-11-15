import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Index" />
      <Stack.Screen name="setting/election/Application" />
      <Stack.Screen name="setting/election/ElectionResult" />
      <Stack.Screen name="setting/finances/AdditionalFee" />
      <Stack.Screen name="setting/finances/RegistrationFee" />
      <Stack.Screen name="setting/finances/Transaction" />
      <Stack.Screen name="setting/finances/TuitionFeeStructure"  />
    </Stack>
  );
}
