import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
//export default function App(){


class App extends Component {
  constructor(){
    super();
    this.name="Matthew";
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello {this.name}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
