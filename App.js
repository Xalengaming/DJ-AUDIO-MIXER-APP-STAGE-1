import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
   displayAlert1 = () =>{
    alert("*Note: Black Button does not have a style prop defined on it.");
  }

   displayAlert2 = () =>{
    alert("*Note: Green Button does not have a style prop defined on it.");
  }

   displayAlert3 = () =>{
    alert("*Note: Pink Button does not have a style prop defined on it.");
  }

   displayAlert4 = () =>{
    alert("*Note: Orange Button does not have a style prop defined on it.");
  }

   displayAlert5 = () =>{
    alert("*Note: Blue Button does not have a style prop defined on it.");
  }
  
   displayAlert6 = () =>{
    alert("*Note: Red Button does not have a style prop defined on it.");
  }
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Button color="black" title="sound 1" onPress={this.displayAlert1}/>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Button color="green" title="sound 2" onPress={this.displayAlert2}/>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Button color="pink" title="sound 3" onPress={this.displayAlert3}/>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Button color="orange" title="sound 4" onPress={this.displayAlert4}/>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Button color="" title="sound 5" onPress={this.displayAlert5}/>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Button color="red" title="sound 6" onPress={this.displayAlert6}/>
      </View>
    );
  }
}