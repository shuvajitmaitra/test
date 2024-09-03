import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
