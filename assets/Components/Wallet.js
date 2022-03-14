import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List, Searchbar, Text, Appbar } from "react-native-paper";

export const Wallet = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollvuw}>
      <Appbar.Header style={styles.appbar} dark={true}></Appbar.Header>
      <List.Section style={styles.container}>
        <List.Accordion
          title="Btc"
          left={(props) => <List.Icon {...props} icon="bitcoin" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={(props) => <List.Icon {...props} icon="bitcoin" />}
         
          onPress={handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
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
    backgroundColor: "#2dd3aa",
  },
});
