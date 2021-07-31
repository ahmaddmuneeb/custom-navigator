import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// Import Bottomtab & Stack Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// Import Screens
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ExploreScreen from "../screens/ExploreScreen";
import PostScreen from "../screens/PostScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();
// Home Stack
function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>
                Home
              </Text>
            </View>
          ),
          headerTitleStyle: {
            color: "red",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => navigation.openDrawer()}
            >
              <View>
                <MaterialIcons name="menu" color="red" size={30} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ margin: 10 }}>
              <View>
                <MaterialIcons name="logout" color="red" size={30} />
              </View>
            </TouchableOpacity>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#FFFFFF",
          position: "absolute",
          margin: 16,
          elevation: 2,
          height: hp("10%"),
          borderRadius: 12,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: wp("100%"),
              }}
            >
              <MaterialIcons
                style={{ color: focused ? "red" : "grey" }}
                name="home"
                size={24}
                color="red"
              />
              <Text
                style={{
                  color: focused ? "red" : "grey",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: wp("100%"),
              }}
            >
              <Ionicons
                style={{ color: focused ? "red" : "grey" }}
                name="chatbubble"
                size={24}
                color="red"
              />
              <Text
                style={{
                  color: focused ? "red" : "grey",
                  fontSize: 12,
                }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                bottom: 4,
                width: wp("100%"),
              }}
            >
              <MaterialIcons
                style={{ color: focused ? "red" : "grey" }}
                name="explore"
                size={50}
                color="red"
              />
            </View>
          ),
        }}
        name="Post"
        component={PostScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: wp("100%"),
              }}
            >
              <MaterialIcons
                style={{ color: focused ? "red" : "grey" }}
                name="explore"
                size={24}
                color="red"
              />
              <Text
                style={{
                  color: focused ? "red" : "grey",
                  fontSize: 12,
                }}
              >
                Explore
              </Text>
            </View>
          ),
        }}
        name="Explore"
        component={ExploreScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: wp("100%"),
              }}
            >
              <Ionicons
                style={{ color: focused ? "red" : "grey" }}
                name="settings"
                size={24}
                color="red"
              />
              <Text
                style={{
                  color: focused ? "red" : "grey",
                  fontSize: 12,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabNavigator;
