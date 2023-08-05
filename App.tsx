// In App.js in a new project

import React from 'react';
import { View, Text , StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import GetNews from './src/screens/GetNews';
import WebViewComponent from './src/screens/WebViewComponent';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {


  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="HOME" component={HomeScreen}/>
        <Stack.Screen name='NEWS' component={GetNews} />
        <Stack.Screen name='WEBVIEW' component={WebViewComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;