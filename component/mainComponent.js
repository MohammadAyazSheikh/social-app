
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './logInComponent';
import SignUp from './signUpComponent'
import Home from './homeComponent';
import { Text, View, Button } from 'react-native';
import {root_Tab} from '../routes/rooTab';

const rootStack = createStackNavigator();



export default function Main() {
  return (
    <NavigationContainer>
      <rootStack.Navigator initialRouteName="Home"
        screenOptions={{
          style: {
            textAlign: 'center'
          },
          headerStyle: {
            backgroundColor: '#A4A7A0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            marginRight: 50
          },
        }}
      >
        <rootStack.Screen name="Home" component={Home}
          options={{
            title: 'Getting Start',
            headerTitleStyle: {
              alignSelf: 'center',
            },
          }} />
        <rootStack.Screen name="LogIn" component={LogIn}
          options={{ title: 'Login Now' }} />
        <rootStack.Screen name="SignUp" component={SignUp}
          options={{ title: 'Register' }} />
        <rootStack.Screen name="RootTab" component={root_Tab}
          options={{
            headerShown: false
          }}
        />
      </rootStack.Navigator>
    </NavigationContainer>
  );
}
