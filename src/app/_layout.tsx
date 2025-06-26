import { ThemeProvider } from "@/providers/ThemeProvider";
import { Stack } from "expo-router";
import { ReactNode } from "react";


export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            {/* {children} */}
            <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
    )
}