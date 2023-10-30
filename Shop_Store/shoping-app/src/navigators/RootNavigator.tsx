import { View, Text } from "react-native";
import React from "react";
import { NavigatorScreenParams } from "@react-navigation/native";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import TabsNavigator, { TabsStackParamList } from "./TabsNavigator";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  Details: {
    id: string;
  };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
