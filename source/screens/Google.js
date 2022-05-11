import React from 'react';
import { Text,View,Button } from 'react-native';
import WebView from 'react-native-webview';

export default class Google extends React.Component  {
    render() {
    return (
      <View>
       <WebView source={{uri: 'https://www.google.com/' }}/>
        
      </View>
    )
    }
  }
  