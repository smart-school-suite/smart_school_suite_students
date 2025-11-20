import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SheetProvider } from 'react-native-actions-sheet';
import "react-native-reanimated";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppContent from "../app/appContent";
import { AuthProvider } from "../context/authContext";
import '../sheets/sheets';
import { persistor, store } from "../store/reduxStore";
export const unstable_settings = {
  anchor: "(tabs)",
};
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: true,
      },
      mutations: {},
    },
  });
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SheetProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
            <AppContent />
            </ThemeProvider>
          </QueryClientProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
    </SheetProvider>
  );
}
