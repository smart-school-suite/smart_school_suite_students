import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="ChangePassword" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="LoginOtp" />
      <Stack.Screen name="PasswordReset" />
      <Stack.Screen name="ResetPasswordOtp" />
      <Stack.Screen name="PasswordResetSuccessfull"  />
      <Stack.Screen name="Test" />
    </Stack>
  );
}
