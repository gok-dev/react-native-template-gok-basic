import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Main from '~/pages/Main';

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Main" component={Main} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
