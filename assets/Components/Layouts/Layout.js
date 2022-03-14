import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, BottomNavigation, Text } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllCurrency } from "../AllCurrency";
import { Login } from "../Login";
import { Menu } from "../Menu";
import Dashboard from "../Dashboard";

export const Layout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
         headerStyle: { backgroundColor: "skyblue" },
        }}
      >
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};
