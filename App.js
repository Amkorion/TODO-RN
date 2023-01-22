import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function deleteGoalHandler(id) {
    setListOfGoals((prevList) => {
      return prevList.filter((goal) => goal.id !== id);
    });
  }
  function modalChangeHandler() {
    setModalIsVisible(!modalIsVisible);
  }
  function addGoalHandler(enteredGoalText) {
    setListOfGoals((prevList) => [
      ...prevList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(!modalIsVisible);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {modalIsVisible && (
          <GoalInput
            onAddGoalHandler={addGoalHandler}
            visible={modalIsVisible}
            closeInput={modalChangeHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  item={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
        <Button
          title="Додайте нову ціль"
          color="orange"
          onPress={modalChangeHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
