import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigator from "./DrawerNavigator";

const RootStack = createStackNavigator();

const RootStackNavigator = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
  </RootStack.Navigator>
);

export default RootStackNavigator;
