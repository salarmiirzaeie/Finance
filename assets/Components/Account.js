import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List, Searchbar, Text, Appbar } from "react-native-paper";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const Acount = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollvuw}>
      <Appbar.Header style={styles.appbar} dark={true}></Appbar.Header>
      <List.Section style={styles.container}>
       
          <List.Item style={styles.item} title="تنظیمات" />
          <List.Item style={styles.item} title="Second item" />
          <List.Item style={styles.item} title="First item" />
          <List.Item style={styles.item} title="Second item" />
        
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollvuw: {
    backgroundColor: "rgb(236, 236, 236)",
    borderRadius:15
  },
  appbar: {
    backgroundColor: "#20509e",
  },
  item:{
      borderTopWidth:0.5,
      textAlign:'right',
      borderTopColor:'lightgray',
      borderBottomColor:'lightgray',
      borderBottomWidth:0.5
  }
});
