import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { NativeBaseProvider } from 'native-base';
import Stacks from './stacks';

export default function Navigator() {

    const useScheme = useColorScheme();

    const colors = {
        primary: "#fff",
        text: "#000"
    }

    return (
        // <ThemeProvider theme={colors}>
        <NativeBaseProvider>
            <NavigationContainer>
                <Stacks />
            </NavigationContainer>
        </NativeBaseProvider>
        // </ThemeProvider>
    )
}