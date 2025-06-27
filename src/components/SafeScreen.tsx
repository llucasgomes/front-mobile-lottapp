import { useColorScheme } from 'nativewind';

import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SafeScreen({ children }: { children: ReactNode }) {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      className={`${colorScheme === 'dark' ? 'dark' : ''} flex-1 min-h-screen`}
      // style={{ paddingTop: insets.top }}
    >
      {children}
    </View>
  );
}
