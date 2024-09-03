import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen'; // Replace with your Home screen
import FieldsScreen from './screens/FieldsScreen'; // Replace with your Fields screen
import IrrigationScreen from './screens/IrrigationScreen'; // Replace with your Irrigation screen
import ReportsScreen from './screens/ReportsScreen'; // Replace with your Reports screen
import MoreScreen from './screens/MoreScreen'; // Replace with your More screen

import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === 'Fields') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (rn === 'Irrigation') {
              iconName = focused ? 'water' : 'water-outline';
            } else if (rn === 'Reports') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            } else if (rn === 'More') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here! We usually use an
            // icon component from a library like `react-native-vector-icons`
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fields" component={FieldsScreen} />
        <Tab.Screen name="Irrigation" component={IrrigationScreen} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomeScreen";
// import SearchScreen from "./screens/SearchScreen";

// const Stack = createStackNavigator();

// export default function App() {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="Home">
//        <Stack.Screen name="Home" component={HomeScreen} />
//        <Stack.Screen name="Search" component={SearchScreen} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
// }