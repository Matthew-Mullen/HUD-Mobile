import { Component } from "react";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableHighlight,
  } from "react-native";
export class SettingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>This is the settings screen!</Text>
        <StatusBar style="auto" />
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
export default SettingsScreen;
