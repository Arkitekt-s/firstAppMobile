import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondPage from "./Business-card/SecondPage";
import Home from "./Business-card/Home";
const Stack = createStackNavigator();
const myStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: "Welcome to Maersk" }} />
                <Stack.Screen name="SecondPage" component={SecondPage} options={{ title: "Maersk" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default myStack;