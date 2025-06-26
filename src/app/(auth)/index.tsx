import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { H1 } from "@/components/ui/Typography";

import "@/styles/global.css";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";


export default function Index() {
    const router = useRouter()
    return (
        <View className="pt-11 px-6 flex-1 justify-center gap-5 ">
            <View className="w-full flex flex-col gap-7">
                <Image
                    source={require("@/assets/images/login.png")}
                    className="w-full h-80"
                    resizeMode="contain"
                />
                <H1 className="w-full text-center text-5xl h-16"> Login</H1>
                <View className=" flex flex-col gap-5">
                    <Input placeholder="Insira o cpf" />
                    <Input placeholder="Insira sua senha" secureTextEntry />
                    <View className="w-full flex flex-row justify-between">
                        <Button
                            label="Criar conta?"
                            labelClasses="text-blue-400 text-xl no-underline"
                            className="flex justify-end"
                            variant={"link"}
                            onPress={() => router.push("/(auth)/register")}
                        />
                        <Button
                            label="Esqueci a Senha"
                            labelClasses="text-blue-400 text-xl no-underline"
                            className=" flex justify-end "
                            variant={"link"}
                            onPress={() => router.push("/(auth)/forgot-password/step1")}
                        />
                    </View>
                </View>

                <Button label="Entrar" className="" size={"lg"} />

            </View>
        </View>
    )
}
