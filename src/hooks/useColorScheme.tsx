import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui3/Button';
import { useColorScheme } from "nativewind";
import React, { useEffect } from 'react';


export const ThemeToggle = () => {
    const { colorScheme, setColorScheme } = useColorScheme();

    useEffect(() => {
        setColorScheme('light');
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