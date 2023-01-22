import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoalHandler(enteredGoalText);

    //TODO добавить валидацию на случай пустого инпута

    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          clearButtonMode="always"
          style={styles.textInput}
          value={enteredGoalText}
          placeholder="Вкажіть ціль"
          onChangeText={goalInputHandler}
        />
        <View style={styles.btnsContainer}>
          <View style={styles.button}>
            <Button
              title="Ваші Цілі"
              onPress={props.closeInput}
              color="orange"
            />
          </View>
          <View style={styles.button}>
            <Button title="Додати" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "80%",
    padding: 16,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
