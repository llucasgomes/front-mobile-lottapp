import { forwardRef } from 'react';
import { TextInput, View } from 'react-native';

import { cn } from '@/lib/utils';

import { Text } from './Text';

export interface InputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn('flex flex-col gap-1.5', className)}>
      {label && <Text className={cn('text-base', labelClasses)}>{label}</Text>}
      <TextInput
        className={cn(
          inputClasses,
          'border h-16 text-xl  border-input py-2.5 px-4 rounded-lg dark:placeholder:text-muted-foreground'
        )}
        {...props}
      />
    </View>
  )
);

export { Input };
