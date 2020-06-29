import 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ActivityIndicator } from 'react-native';
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
             style={{width: 300, height: 180}} />
      <Text>Welcome to the Illinois Covid Tracker!</Text>
      <Button
      onPress={() => {
        navigation.navigate('Tracking IL');
      }} 
        title="Tap Here for Tracking Screen"
        style={styles.button}
        />
    </View>
  );
}

function TrackingScreen({}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://covidtracking.com/api/states?state=il')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);

//String versions of data are declared here.
let data2 = JSON.stringify(data, ['date']);
let data3 = JSON.stringify(data, ['positive','negative']);

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Updated Stats</Text>
      <Text>-------------------</Text>
      <Text>Today's Date: {data2}</Text>
      <Text>-------------------</Text>
      <Text>Positive and Negative Cases: {data3}</Text>
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
  
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'red',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});