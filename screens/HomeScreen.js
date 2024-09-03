
// Example: HomeScreen
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header'; // Import your header component

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="Home" />
      <Text>Welcome to the Home Screen!</Text>
  <View style={styles.container}>

     <Button
       title="Search City"
       onPress={() => navigation.navigate("Search")}
     />
   </View>
    </View>
  );
};



export default HomeScreen;

// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import Header from './Header';


// const HomeScreen = ({ navigation }) => {
//  return (
//   <View>
//   <Header title="Home" />
//        <Text style={styles.heading}>Welcome to Weather App</Text>
//    {/* <View style={styles.container}>

//      <Button
//        title="Search City"
//        onPress={() => navigation.navigate("Search")}
//      />
//    </View> */}
//    </View>
//  );
// };


const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#e3dbd5",
 },
 heading: {
   fontSize: 24,
   fontWeight: "bold",
   marginBottom: 16,
   color: "black",
 },
});