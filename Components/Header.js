import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 40,
    color: "black",
    fontFamily: "metal-mania",
  },
});
export default Header;
