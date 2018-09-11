import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class EachItem extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.item}</Text>
      </View>
      <View style={{backgroundColor:'#000',height:1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize:17,
  },
});
