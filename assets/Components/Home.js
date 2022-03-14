import React from "react";
import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from "react-native";
import {
  Avatar,
  Title,
  Paragraph,
  IconButton,
  Appbar,
} from "react-native-paper";
import { Slider } from "./Slider";
import { LinearGradient } from "expo-linear-gradient";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { useNavigation } from "@react-navigation/native";
export const Home = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const navigation=useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Appbar.Header style={styles.appbar} dark={true}>
        <Appbar.Content
          style={styles.title}
          title="فایننس"
          subtitle="بزرگترین صرافی ارزدیجیتال "
        />
      </Appbar.Header>
      <Slider />

      <View style={styles.carcontainer}>
        <Title style={styles.cardstitle}>آخرین اخبار</Title>
        <TouchableOpacity onClick={()=>navigation.navigate('Login')}>
        <View style={styles.bigCard}>
          <View style={styles.cardctnt}>
            <Title style={styles.cardcontent}>آخبار</Title>
            <Text style={styles.cardcontent}>توضیحات</Text>
          </View>
          <View style={styles.cardctnt}>
            <Image
              style={styles.pic}
              source={{uri:'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F5f0f2b5c-2dec-11e9-8744-e7016697f225?fit=scale-down&source=next&width=700' }}
              />
          </View>
        </View></TouchableOpacity>
        <View style={styles.bigCard}>
        <View style={styles.cardctnt}>
            <Title style={styles.cardcontent}>آخبار</Title>
            <Text style={styles.cardcontent}>توضیحات</Text>
          </View>
          <View style={styles.cardctnt}>
            <Image
              style={styles.pic}
              source={{uri:'https://source.unsplash.com/1024x768/?tree'}}
              />
          </View>
        </View>
        <View style={styles.bigCard}>
        <View style={styles.cardctnt}>
            <Title style={styles.cardcontent}>آخبار</Title>
            <Text style={styles.cardcontent}>توضیحات</Text>
          </View>
          <View style={styles.cardctnt}>
            <Image
              style={styles.pic}
              source={{uri:'https://source.unsplash.com/1024x768/?tree'}}
              />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
  appbar: {
    backgroundColor: "#2dd3aa",
  },
  container: {
    backgroundColor: "rgb(236, 236, 236)",
  },
  carcontainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  cardstitle: {
    textAlign: "right",
    marginTop: 10,
    marginRight: 10,
    paddingBottom: 5,
  },
  cardctnt: {
    flex: 1,
  },
  bigCard: {
    display: "flex",
    flexDirection: "row",
    borderTopColor: "lightgray",
    borderTopWidth: 0.8,
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.5,
  },
  pic: {
    width: "100%",
    height: 100,
  },
  cardcontent: {
    textAlign: "right",
    paddingRight: 5,
    paddingTop: 5,
  },
});
