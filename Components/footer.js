import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 20,
    color: "black",
    fontFamily: "metal-mania",
  },
  footer: {
    width: "100%",
  
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:20
  },
});

export default Footer;
