import React from 'react';
import { Text,View,Button,Image,StyleSheet,ScrollView } from 'react-native';

//platform : platform.os returns ios or andriud >> not recommended
//if i want something for android: name the file like this : About.android.js
//if i want something for ios: name the file like this : About.ios.js
export default class Card extends React.Component  {
    render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Card Screen</Text>
        <Button title='about' onPress={()=>{
            this.props.navigation.navigate('About')
            
             //will not run because card is not in the navigator container but we can pass the navigate probs from home
        //<Image source = {require('../imgs/img1.jpg')} style={{width:50, height:50}}/> 

        }}></Button>
        
      </View>
    )
    }
  }
  