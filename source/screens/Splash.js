import React from "react";
import { Text, View, Image } from "react-native";
import { ActivityIndicator } from "react-native-web";
//flex : 1 take full width of parent
//web view: open web page inside my application
export default class Splash extends React.Component {
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>ITIOS42</Text>
        <Image
          source={require("../imgs/img1.jpg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
        />
       { this.navigateToHome()}
       <ActivityIndicator size='large' color="black"/>
      </View>
    );
  }
  navigateToHome() {
      setTimeout(() => {
          this.props.navigation.navigate('Home')
          
      }, 1000);
  }
}
