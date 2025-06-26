import SafeScreen from "@/components/SafeScreen";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { StatusBar } from "react-native";

export default function RootLayout() {
    const { colorScheme } = useColorScheme();
    return (
        <ThemeProvider>
            <StatusBar
                barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
                backgroundColor="transparent"
                translucent
            />
            <SafeScreen >
                <Stack screenOptions={{ headerShown: false }} />
            </SafeScreen>
        </ThemeProvider>
    );
}