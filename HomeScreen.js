import { Component, useEffect } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";

var bearArr = [
  "https://www.zoochat.com/community/media/kodiak-bear.31684/full",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/83FF/production/_103719733_925cbb3e-c5bd-452c-858b-9c9813649ed3.jpg",
  "https://i.pinimg.com/550x/c6/24/3a/c6243abee09016d53c1f701b1a478be1.jpg",
  "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/03/22/101928.jpg",
  "https://img.freepik.com/free-vector/cute-bear-logo_151280-14.jpg",
  "https://i.pinimg.com/736x/80/22/b0/8022b01fdbcdb31c754ee50ed8001a47.jpg",
];
export class HomeScreen extends Component {
  changeBearFunction() {
    var newstate = this.state.curBear;
    while(newstate==this.state.curBear){
        newstate = Math.floor(Math.random() * bearArr.length);
    }
    this.state.curBear = newstate;
    //console.log("new bear~" + this.state.changeBear);
   // this.fetchTubbyGithubWork();
    this.forceUpdate();
  }
  async fetchTubbyGithubWork(){
      var response = await fetch("https://api.github.com/users/Matthew-Mullen/events");
      var jsonOfResponse = await response.json();
      console.log(jsonOfResponse)
      this.state.tubbyMostRecentGithubActivity = jsonOfResponse[0]; 
      this.forceUpdate(); 
      
  }
  constructor() {
    super();
    this.state = {
      tubbyMostRecentGithubActivity: null,
      curBear: Math.floor(Math.random() * bearArr.length),
    };
    this.fetchTubbyGithubWork = this.fetchTubbyGithubWork.bind(this);
    this.changeBearFunction = this.changeBearFunction.bind(this);
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Text>This is my first mobile app using React Native!</Text>
          <Image onLoad={this.fetchTubbyGithubWork}
            source={{
              uri: bearArr[this.state.curBear],
            }}
            style={{ width: 500, height: 500 }}
          ></Image>
          <Button
            title="Press me to see a new bear!"
            onPress={this.changeBearFunction}
          />
          <Text>{this.state.tubbyMostRecentGithubActivity==null? 'tubbys work is loading' : 'tubby most recently did a: '+this.state.tubbyMostRecentGithubActivity["type"] + ', on the repo: '+this.state.tubbyMostRecentGithubActivity["repo"]["name"] +'\nhere is a link to his latest work: '+this.state.tubbyMostRecentGithubActivity["repo"]["url"] }</Text>
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default HomeScreen;
