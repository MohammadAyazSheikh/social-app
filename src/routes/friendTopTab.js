import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Freinds from '../component/friendsComponent';
import ActiveFreinds from '../component/activeFriendsComponent';
import FriendProfile from '../component/friendProfileCompnent';


const msgTopTab = createMaterialTopTabNavigator();

const friendStack = createStackNavigator();



export default function Friends_Top_Tab() {
    return (
        <msgTopTab.Navigator initialRouteName='AllFreinds'

            tabBarOptions={
                {
                    labelStyle: {
                        fontSize: 18,
                    },
                    // tabStyle: {
                    //     width: 100,
                    // },
                    activeTintColor: 'white',
                    inactiveTintColor: 'grey',
                    style: {
                        backgroundColor: '#252623',
                        marginTop: 25,
                    },
                    indicatorStyle: {
                        borderBottomColor: 'grey',
                        borderBottomWidth: 4,
                        //borderColor: 'grey',
                    },
                }}>
            <msgTopTab.Screen name="AllFreinds" options={{ title: 'Friends' }} component={friend_stack} />
            <msgTopTab.Screen name="Active" component={ActiveFreinds} />
        </msgTopTab.Navigator>
    );
}
function friend_stack() {
    return (
        <friendStack.Navigator initialRouteName="Friends"
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
                    marginRight: 50
                },
            }}>
            <friendStack.Screen name="Friends" component={Freinds}
                options={{ title: 'Friends' }}
                options={{
                    headerShown: false
                }}
            />
            <friendStack.Screen name="friendProfile" component={FriendProfile}
                options={
                    ({ route }) => (
                        {
                            title: route.params.userName,
                            headerShown: false
                        }
                    )}
            />
        </friendStack.Navigator>
    );
}