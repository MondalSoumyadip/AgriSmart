import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      {/* <Text style={styles.headerText}>{title}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // header: {
  //   backgroundColor: 'lightblue',
  //   padding: 15,
  //   elevation: 2,
  //   alignContent: 'center',
  // },
  // headerText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  // },
});

export default Header;