import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-dom';

//You're in the process of creating 2 screens to navigate between.
const Stack = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen
          name="Home"
          component={ Home }
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Tracking IL" component={ Tracker } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://img.hpnonline.com/files/base/ebm/hpn/image/2020/04/16x9/US_braces_for_tough_COVID_19_week__deaths_drop_in_parts_of_Europe_pic___4.6.20du___usa_4974031_1920___Pixabay.5e8b411805052.png?auto=format&fit=max&w=1200'}}
             style={{width: 200, height: 100}} />
      <Text>Welcome to the Illinois Covid Tracker!</Text>
      <Button 
      onPress={() => {
        navigation.navigate('Tracking IL');
      }} 
        title="Tap Here for Tracking Screen"
        color="red"
        />
    </View>
  );
}

function TrackingScreen({}) {
  return(
    <View style={styles.container}>
      <Text>Welcome to the tracking page!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tracking IL" component={TrackingScreen} />
      </Stack.Navigator>
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
