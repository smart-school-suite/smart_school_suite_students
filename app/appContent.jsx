import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
const AppContent = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
          </>
        ) : (
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        )}
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};
export default AppContent;