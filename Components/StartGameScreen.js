import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Colors from "./color.js";
import MainButton from "./MainButton.js";
import DefaultStyle from "./default-stylesheet.js";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Enter between 1-99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.confirm}>
        <Text style={DefaultStyle.choosen}>
          {" "}
          Choosen Number :{selectedNumber}{" "}
        </Text>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screens}>
        <Text style={DefaultStyle.bodyText}>
          Enter a Number 
        </Text>
        <Text style={[DefaultStyle.bodyText,{marginBottom:40}]}>
        and Let others Guess🤔
        </Text>
        <View style={styles.inputContainer}>
          <Text style={DefaultStyle.select}>Select A Number</Text>
          <TextInput
            style={styles.input}
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
            keyboardType="number-pad"
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="reset"
              onPress={resetInputHandler}
              color={Colors.accent}
            />
            <Button
              style={styles.button}
              title="Confirm"
              onPress={confirmInputHandler}
              color={Colors.primary}
            />
          </View>
        </View>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  confirmText: {
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
    marginBottom: 12,
  },
  input: {
    width: 80,
    height: 30,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  button: {
    alignItems: "center",
    width: 160,
    borderRadius: 20,
  },
  screens: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: "40%",
  },

  inputContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  confirm: {
    marginVertical: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,

    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    fontSize: 20,
  },
});
export default StartGameScreen;
