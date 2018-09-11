import React from "react";
import { SectionList, FlatList, StyleSheet, Text, View } from "react-native";
import EachItem from "./Each-Item"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {['Here','is','the','Flatlist']}
          renderItem = {({item}) =><EachItem item={item}></EachItem>}
          keyExtractor={(item, index) => index.toString()}
          />

        <View style = {styles.nextSection}><Text style = {{fontSize:20,color:'blue'}}>SectionList</Text></View>

        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <EachItem item={item}/>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor:'#aaa',
  },
  nextSection: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  sectionHeader:{
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
});
