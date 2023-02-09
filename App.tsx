import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/Routes';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { AuthContextProvider } from './src/contexts/AuthContext/AuthProvider';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}