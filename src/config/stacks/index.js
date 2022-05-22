import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CreateScreen from "../../screens/create";

const Stack = createNativeStackNavigator();

export default function Stacks() {
    return (
        <Stack.Navigator
        >
            <Stack.Group
                screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }, headerShown: true }}
            >
                <Stack.Screen name="Create" component={CreateScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}