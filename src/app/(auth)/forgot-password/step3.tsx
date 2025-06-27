import { Image, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { H1, P } from '@/components/ui/Typography';
import '@/styles/global.css';

export default function Step3() {
  const router = useRouter();
  return (
    <View className="pt-11 px-6 flex-1 items-start  justify-start  gap-5 ">
      <View className="w-full flex flex-col gap-7 pt-11">
        <Image
          source={require('@/assets/images/password.png')}
          className="w-full h-80"
          resizeMode="contain"
        />
        <H1 className="w-full text-center text-5xl h-16">Esqueci...</H1>
        <P className="w-full text-center text-xl">Agora sim.!!! Iremos trocar sua senha.</P>
        <View className=" flex flex-col gap-5">
          <Input label="Nova Senha" labelClasses="text-lg" placeholder="Insira a Senha" />
          <Input label="Repita a Senha" labelClasses="text-lg" placeholder="repita Novamente" />
        </View>

        <Button onPress={() => router.replace('/(auth)')} label="Salvar" className="" size={'lg'} />
      </View>
    </View>
  );
}
