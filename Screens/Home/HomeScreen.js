import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: "yellow",
          padding: 10,
          width: "20%",
          alignItems: "center",
        }}
      >
        <Text>Button</Text>
      </TouchableOpacity>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
      <Text style={styles.homeScreen}>HomeScreen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    fontSize: 30,
    color: "red",
  },
  container: {
    backgroundColor: "green",
    // height: ,
  },
});
