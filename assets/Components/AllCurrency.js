import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Searchbar,
  Text,
  DataTable,
  Button,
  Appbar,
  Colors,
  ActivityIndicator,
} from "react-native-paper";
import useWebSocket from "react-use-websocket";

export const AllCurrency = () => {
  const [socketUrl, setSocketUrl] = React.useState("wss://ws2.arzdigital.com/");
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [currencies, setCurrencies] = React.useState([]);
  React.useEffect(() => {
    sendMessage(`{"action":"coins","key":1,"page":1}`);
  }, [socketUrl]);
  React.useEffect(() => {
    return () => {
      if (lastMessage !== null) {
        const data = JSON.parse(lastMessage.data);

        if (data.action == "coins") var dataes = data.data;
        dataes.forEach((q) => (q.price = Number(q.price)));

        setCurrencies(dataes);
      }
    };
  }, [lastMessage, setCurrencies]);

 
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => {
    let temp =currencies;
    let current=temp.find(q=>q.name||q.symbol||q.fname==query)
   setCurrencies(current)
    
  };

  return (
    <ScrollView>
      <Appbar.Header style={styles.appbar} dark={true}>
        <Searchbar
          placeholder="جستجو"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.center}
        />
      </Appbar.Header>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title>
            <Text style={styles.center}> قیمت</Text>
          </DataTable.Title>
          <DataTable.Title numeric>تغییرروزانه</DataTable.Title>
          <DataTable.Title numeric>نام</DataTable.Title>
        </DataTable.Header>

        {
        
        
        currencies.length ==0 ? (
          <DataTable.Row>
         <ActivityIndicator size='large' animating={true} color={Colors.green100}/>
      
          </DataTable.Row>
        )  : (
          currencies.slice(0, 50).map((data, i) => (
            <DataTable.Row key={i}>
              <DataTable.Cell>
                <Button color="#20509e" mode="contained">
                  تبادل
                </Button>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.center}>{data.price.toFixed(4)}</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={data.d1 > 0 ? styles.up : styles.down}>
                  {data.d1}%
                </Text>
              </DataTable.Cell>

              <DataTable.Cell numeric>{data.symbol}</DataTable.Cell>
            </DataTable.Row>
          ))
        )}
      </DataTable>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#16d0c5",
  },
  up: {
    color: "#16d0c5",
  },

  down: {
    color: "red",
  },
  center: {
    textAlign: "right",
  },
});
