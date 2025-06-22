import {
  Roboto_400Regular,
  Roboto_600SemiBold,
  Roboto_700Bold,
  useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Layout } from './src/layout/stackLayout/layout';

SplashScreen.preventAutoHideAsync();

export default function App() {  
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_600SemiBold,
    Roboto_700Bold,
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
    <SafeAreaProvider>
      <Layout />
    </SafeAreaProvider>
  )
}
