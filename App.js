import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Image source={{uri: 'https://img.hpnonline.com/files/base/ebm/hpn/image/2020/04/16x9/US_braces_for_tough_COVID_19_week__deaths_drop_in_parts_of_Europe_pic___4.6.20du___usa_4974031_1920___Pixabay.5e8b411805052.png?auto=format&fit=max&w=1200'}}
             style={{width: 200, height: 100}} />
      <Text>Welcome to the Illinois Covid Tracker!</Text>
      <Button onPress={() => {
        alert('You tapped the button!');
      }} 
        title="Press Me"
        />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
