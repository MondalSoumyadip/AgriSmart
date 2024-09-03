// Example: HomeScreen
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header'; // Import your header component

const IrrigationScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="Home" />
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default IrrigationScreen;