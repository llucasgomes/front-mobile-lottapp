import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { useColorScheme } from "nativewind";
import React, { useEffect } from 'react';


export const ThemeToggle = () => {
    const { colorScheme, setColorScheme } = useColorScheme();

    useEffect(() => {
        setColorScheme('dark');
    }, []);

    const toggleColorScheme = () => {
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button onPress={toggleColorScheme}>
            <Text>Toggle theme (Current: {colorScheme})</Text>
        </Button>
    );
}