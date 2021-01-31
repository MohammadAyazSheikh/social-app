import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, Button } from 'react-native';
import Message from '../component/messageComponent';
import Chat from '../component/chatComponent';
import NewMsg from '../component/newMsgComponent';
import Search from '../component/searchComponent';
import Freinds from '../component/friendsComponent';
import ActiveFreinds from '../component/activeFriendsComponent';
import FriendProfile from '../component/friendProfileCompnent';
import UserProfile from '../component/userProfileCompoent';
import Notification from '../component/notificationComponent';

import { Constants } from 'expo';

const msgTopTab = createMaterialTopTabNavigator();

const searchStack = createStackNavigator();




export default function search_Stack() {
    return (
        <searchStack.Navigator
            initialRouteName="searchScreen"
            screenOptions={{
                style: {
                    textAlign: 'center'
                },
                headerStyle: {
                    backgroundColor: '#252623',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginRight: 50,
                    
                },
               
            }}>
            <searchStack.Screen name="searchScreen" component={Search}
                options={
                    {
                        headerShown: false
                    }
                }

            />
            <searchStack.Screen name="friendProfileScreen" component={FriendProfile}

                options={
                    {
                        headerShown: false, 
                    }
                }
            />
        </searchStack.Navigator>
    );
}