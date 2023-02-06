import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondPage from "./Business-card/SecondPage";
import HomePage from "./Business-card/HomePage";
const Stack = createStackNavigator();
const myStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage} options={{ title: "Welcome to Maersk" }} />
                <Stack.Screen name="SecondPage" component={SecondPage} options={{ title: "Maersk" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default myStack;