import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Index" />
      <Stack.Screen name="election/Application" />
      <Stack.Screen name="election/ElectionResult" />
      <Stack.Screen name="finances/AdditionalFee" />
      <Stack.Screen name="finances/RegistrationFee" />
      <Stack.Screen name="finances/Transaction" />
      <Stack.Screen name="finances/TuitionFeeStructure"  />
    </Stack>
  );
}
