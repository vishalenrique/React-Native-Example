import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {  createStackNavigator } from 'react-navigation';

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'green',
  }
});
