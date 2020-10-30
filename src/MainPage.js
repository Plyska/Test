import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export const MainPage = () => {
  const [textToSend, setTextToSend] = useState("");
  const [numberOfSymbolsInSms, setNumberOfSymbolsInSms] = useState(0);
  const [result, setResult] = useState(0);

  const getNumberOfSms = () => {
    let words = textToSend.split(/(\s+)/);
    let messages = [];
    let sms = "";
    for (let i = 0; i < words.length; i++) {
      if (sms.length + words[i].length <= numberOfSymbolsInSms) {
        sms += words[i];
      } else {
        messages.push(sms);
        sms = words[i];
      }

      if (i === words.length - 1) {
        messages.push(sms);
      }
    }

    setResult(messages.length);
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        style={styles.text}
        onChangeText={(text) => setTextToSend(text)}
        value={textToSend}
      />
      <View style={styles.boxInputAndText}>
        <TextInput
          style={styles.number}
          onChangeText={(number) => setNumberOfSymbolsInSms(number)}
          value={numberOfSymbolsInSms}
        />
        <Text style={styles.symbolText}>символів</Text>
      </View>

      <View style={styles.button}>
        <Text>
          {" "}
          <Button title="Порахувати кількість SMS" onPress={getNumberOfSms} />
        </Text>
      </View>

      <View style={styles.result}>
        <Text style={styles.resultText}>Потрібно SMS:</Text>

        <Text style={styles.resultNumber}>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "15%",
  },

  text: {
    marginTop: 70,
    width: "80%",
    height: "30%",
    borderWidth: 1,
  },
  number: {
    marginRight: 40,
    paddingLeft: 10,
    fontSize: 20,
    marginBottom: 50,
    marginTop: 50,
    width: 50,
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    width: "80%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  boxInputAndText: {
    alignItems: "center",
    flexDirection: "row",
  },
  symbolText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  result: {
    paddingLeft: 35,
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "row",
  },

  resultText: {
    paddingRight: 30,
    fontSize: 17,
  },
  resultNumber: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
