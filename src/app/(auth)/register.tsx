import { Image, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { H1 } from '@/components/ui/Typography';
import '@/styles/global.css';

export default function Regiter() {
  const router = useRouter();
  const loading = true;
  return (
    <View className="pt-11 px-6 flex-1 justify-center gap-5 ">
      <View className="w-full flex flex-col gap-7">
        <Image
          source={require('@/assets/images/register.png')}
          className="w-full h-80"
          resizeMode="contain"
        />
        <H1 className="w-full text-center text-5xl h-16"> Criar Conta</H1>
        <View className=" flex flex-col gap-5">
          <Input placeholder="Insira o Nome" />
          <Input placeholder="Insira o cpf" />
          <Input placeholder="Insira sua senha" secureTextEntry />
          <View className="w-full flex flex-row justify-between">
            <Button
              label="Já tem conta?"
              labelClasses="text-blue-400 text-xl no-underline"
              className="flex justify-end"
              variant={'link'}
              onPress={() => router.back()}
            />
          </View>
        </View>
        <Button
          disabled={loading}
          label="Criar Conta"
          className="disabled:bg-muted-foreground"
          size={'lg'}
        />
      </View>
    </View>
  );
}
