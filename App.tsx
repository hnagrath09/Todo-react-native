import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Task from "./components/task";

MIcon.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text="Task 1" />
          <Task text="Task 2" />
          <Task text="Task 3" />
        </View>
      </View>
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
    marginBottom: 20
  },
  items: {}
});
