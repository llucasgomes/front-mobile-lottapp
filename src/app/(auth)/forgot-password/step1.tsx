import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { H1, P } from "@/components/ui/Typography";

import "@/styles/global.css";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";


export default function Step1() {
    const router = useRouter()
    return (
        <View className="pt-11 px-6 flex-1 items-start bg-red-300 justify-start  gap-5 ">
            <View className="w-full flex flex-col gap-7 pt-11">
                <Image
                    source={require("@/assets/images/password.png")}
                    className="w-full h-80"
                    resizeMode="contain"
                />
                <H1 className="w-full text-center text-5xl h-16">Esqueci...</H1>
                <P className="w-full text-center text-xl">
                    Vamos ver se é você mesmo!!!
                </P>
                <View className=" flex flex-col gap-5">
                    <Input
                        label="Codigo"
                        labelClasses="text-lg"
                        placeholder="Insira o cpf" />
                </View>

                <Button
                    onPress={() => router.push("/(auth)/forgot-password/step2")}
                    label="Enviar" className="" size={"lg"} />

            </View>
        </View>
    )
}
