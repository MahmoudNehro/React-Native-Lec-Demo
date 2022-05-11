import { View, Text,Button ,StyleSheet,ScrollView} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import About from './about';
import Card from '../common/Card';
import Google from './Google';

//         {/* <Card navigation={this.props.navigation}/> */}
//Activity indicator: load button
//splash screen: load data for marketing
//onboarding screen


export default class HomeScreen extends React.Component  {
    render() {
    return (
      <ScrollView style={{ flex: 1 }}>
          <View style={styles.card}>
              <Button title='google'  onPress={()=>{
            this.props.navigation.navigate('google')
        }} >google</Button>

          <Card />
         <Card/>
         <Card/>

          </View>
        
        <Text>Home Screen</Text>
        <Button title='about' onPress={()=>{
            this.props.navigation.navigate('About')
        }}></Button>
      </ScrollView>
    )
    }
  }
  
  const styles = StyleSheet.create({

    card:{
        backgroundColor:'black',
        
    }
  })