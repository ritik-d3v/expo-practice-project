import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DefaultStyle from "./default-stylesheet";
import MainButton from "./MainButton.js";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listView}>
    <Text>#{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);
const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie😏 ", "You know that's wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyle.opponent}>Opponent Guesss</Text>
      <Text style={DefaultStyle.guessNum}>{currentGuess}</Text>
      <View style={styles.ButtonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
      </View>
      <FlatList
        style={styles.scroll}
        keyExtractor={(item) => item}
        data={pastGuesses}
        renderItem={renderListItem.bind(this, pastGuesses.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: "80%",
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
    marginTop: 10,
    marginBottom: 9,
  },
  listView: {
    flexDirection: "row",
    fontSize: 50,
    borderColor: "fuchsia",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 9,
    borderWidth: 2,
    justifyContent: "space-around",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
