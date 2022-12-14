//this is driver homestack
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerScreenStack1 } from "./DrawerStack1";
import { StatusBar } from "expo-status-bar";
import { CreateAccountScreen, LoginScreen } from "./AuthStack";
import driverS from "./driverStackAcceptStatus";
import driverGoS from "./driverStackGoStatus";
function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the detail page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();
export function HomeScreenStack1() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="DrawerHome"
        component={DrawerScreenStack1}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
      <HomeStack.Screen name = "driverAcceptRideStatus" component={driverS}/>
      <HomeStack.Screen name = "driverGoRideStatus" component={driverGoS}/>
    </HomeStack.Navigator>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  "modal-container": {
    flex: 1,
    alignItems: "center",
    borderRadius: 18,
  },
});
