import { useColorScheme } from 'nativewind';

import { StatusBar } from 'react-native';

import { Stack } from 'expo-router';

import SafeScreen from '@/components/SafeScreen';
import { ThemeToggle } from '@/hooks/useColorScheme';
import { ThemeProvider } from '@/providers/ThemeProvider';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeScreen>
        <Stack initialRouteName="(auth)/index">
          <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
        </Stack>
      </SafeScreen>
      <ThemeToggle />
    </ThemeProvider>
  );
}
