import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import DefaultStyle from "./default-stylesheet";
import Colors from "./color.js";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyle.title}>GAME OVER</Text>
      <View style={styles.img}>
        <Image
          resizeMode="cover"
          style={styles.image}
          //source={require('../assets/win.jpg')}

          source={{
            uri: "https://i.pinimg.com/originals/a5/da/be/a5dabea9202dcfef09cb11340fd86192.gif",
          }}
        />
      </View>
      <Text style={styles.roundnum}>
        Number of Rounds : {props.roundsNumber}
      </Text>
      <Text style={styles.usernum}>Number was : {props.userNumber}</Text>
      <Button
        color={Colors.accent}
        style={styles.restart}
        title="NEW GAME"
        onPress={props.onRestart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "60%",
    height: "25%",
    borderRadius: 200,
    marginBottom: 30,
    paddingBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "120%",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  roundnum: {
    fontSize: 20,
    borderColor: "fuchsia",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: "3%",
    fontFamily: "metal-mania",
  },
  usernum: {
    fontFamily: "metal-mania",
    fontSize: 20,
    borderColor: "fuchsia",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 5,
  },

  restart: {
    padding: 10,
  },
});
export default GameOverScreen;
