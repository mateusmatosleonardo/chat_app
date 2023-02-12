import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/auth/SignIn/SignIn";
import { SignUp } from "../screens/auth/SignUp/SignUp";
import { Home } from "../screens/app/Home/Home";

const Stack = createNativeStackNavigator();

export function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}