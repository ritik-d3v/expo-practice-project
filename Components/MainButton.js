import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "fuchsia",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "metal-mania",
    fontSize: 18,
  },
});
export default MainButton;
