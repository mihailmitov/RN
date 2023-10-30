import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import WelcomeScreen from "./screens/WelcomeScreen";
// import UserScreen from "./screens/UserScreen";
// import FavoritesScreen from "./screens/FavoritesScreen";
// import CategoriesScreen from "./screens/CategoriesScreen";
// import MealsOverviewScreen from "./screens/MealsOverviewScreen";
// import MealDetailScreen from "./screens/MealDetailScreen";

// const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#ccc" },
//         headerTintColor: "white",
//         sceneContainerStyle: {
//           // on the 'Drawer' it is not named 'contentStyle'
//           backgroundColor: "#3f2f25",
//         },
//         drawerContentStyle: { backgroundColor: "#351401" },
//         drawerInactiveTintColor: "white",
//         drawerActiveTintColor: "#351401",
//         drawerActiveBackgroundColor: "#e4baa1",
//       }}
//     >
//       <Drawer.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           title: "All Categories",
//           drawerIcon: ({ color, size }) => (
//             <Ionicans color={color} size={size} name="list" />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Favorites"
//         component={FavoritesScreen}
//         options={{
//           drawerIcon: ({ color, size }) => (
//             <Ionicans color={color} size={size} name="star" />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start  @@@@@@22 working on your app!</Text>
    </View>
  );
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ccc" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealsDetail"
            component={MealDetailScreen}
            options={{
              title: "About the meal",
            }}
          />
        </Stack.Navigator>
        {/* <BottomTab.Navigator
          initialRouteName="User"
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
