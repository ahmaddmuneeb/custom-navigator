import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Divider } from "react-native-elements";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      drawerStyle={{
        marginTop: Constants.statusBarHeight,
        borderTopEndRadius: 40,
        borderBottomEndRadius: 40,
        overflow: "hidden",
        paddingTop: Platform.OS === "android" ? 0 : 10,
      }}
      drawerContent={(props) => {
        return (
          <View>
            <View style={{ flexDirection: "row", margin: 20 }}>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontSize: 21,
                    color: "red",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Menu
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <TouchableOpacity
                  onPress={() => props.navigation.closeDrawer()}
                >
                  <Ionicons name="close-circle-sharp" color="red" size={28} />
                </TouchableOpacity>
              </View>
            </View>
            <Divider orientation="horizontal" width={0.8} color="#e5e5e5" />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                padding: 10,
                backgroundColor: "#e5e5e5",
                margin: 4,
                borderRadius: 6,
              }}
              onPress={() => navigation.navigate("Home")}
            >
              <View>
                <MaterialCommunityIcons name="bell" size={24} color="red" />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Notifications
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                padding: 10,
                backgroundColor: "#e5e5e5",
                margin: 4,
                borderRadius: 6,
              }}
            >
              <View>
                <Ionicons name="pause-circle" size={24} color="red" />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Commands
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                padding: 10,
                backgroundColor: "#e5e5e5",
                margin: 4,
                borderRadius: 6,
              }}
            >
              <View>
                <MaterialIcons name="settings" size={24} color="red" />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Settings
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                padding: 10,
                backgroundColor: "#e5e5e5",
                margin: 4,
                borderRadius: 6,
              }}
            >
              <View>
                <Ionicons name="exit" size={24} color="red" />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
