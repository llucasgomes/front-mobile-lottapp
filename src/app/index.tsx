import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

import { ThemeToggle } from "@/hooks/useColorScheme";
import "@/styles/global.css";
import { useColorScheme } from "nativewind";
import { View } from "react-native";


export default function Index() {
    const { colorScheme } = useColorScheme();
    return (
        <View className={`pt-8 flex-1  min-h-screen items-center justify-center ${colorScheme === "dark" && "dark"}`}>
            <Text>Ola mundo</Text>
            <ThemeToggle />
            <Button variant={"ghost"}>

            </Button>
        </View>
    )
}
