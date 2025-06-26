import { Text } from "@/components/ui/Text";
import { ThemeToggle } from "@/hooks/useColorScheme";
import "@/styles/global.css";
import { View } from "react-native";


export default function Index() {
    return (
        <View className="pt-8 flex-1  min-h-screen items-center justify-center">
            <Text>Ola mundo</Text>
            <ThemeToggle />
        </View>
    )
}
