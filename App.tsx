import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import Task from "./components/task";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<Array<string>>([
    "Task 1",
    "Task 2",
    "Task 3"
  ]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems(prevState => [...prevState, task]);
    setTask("");
  };

  const handleCompleteTask = (index: number) => {
    setTaskItems(prevState => prevState.filter((_, i) => index !== i));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View>
          {taskItems.map((task, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCompleteTask(index)}
            >
              <Task text={task} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: "center"
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginRight: 20
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#C0C0C0"
  },
  addText: {
    fontSize: 32,
    color: "#55BCF6"
  }
});
