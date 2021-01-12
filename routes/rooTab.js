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



const msgTopTab = createMaterialTopTabNavigator();

const msgStack = createStackNavigator();

const rootTab = createBottomTabNavigator();


function msg_Top_Tab() {
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
            <msgTopTab.Screen name="AllFreinds" options={{ title: 'Friends' }} component={Freinds} />
            <msgTopTab.Screen name="Active" component={Tab2} />
        </msgTopTab.Navigator>
    );
}

function msg_Stack() {
    return (
        <msgStack.Navigator initialRouteName="msg"
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
            <msgStack.Screen name="msg" component={Message}
                options={{ title: 'Messages' }}
                options={{
                    headerShown: false
                }} />
            <msgStack.Screen name="Chat" component={Chat}
                options={
                    ({ route }) => ({ title: route.params.userName })}
            />
            <msgStack.Screen name="NewMsg" component={NewMsg}
                options={{ title: 'New Message' }}
            />
            <msgStack.Screen name="topTab" component={msg_Top_Tab}
                options={{ title: 'New Message' }}
            />
        </msgStack.Navigator>
    );
}

export function root_Tab() {
    return (
        <rootTab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Message') {
                            iconName = 'align-center'
                        } else if (route.name === 'Friends') {
                            iconName = 'users'
                            //iconName = focused ? 'at' : 'facebook';
                        } else if (route.name === 'Profile') {
                            iconName = 'user-circle'
                        }
                        else if (route.name === 'Search') {
                            iconName = 'search'
                        }
                        else if (route.name === 'Notification') {
                            iconName = 'bell'
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })
            }

            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                showLabel: false,
                showIcon: true,
                // labelStyle: {
                //   fontSize: 15,
                // },
                style: {
                    backgroundColor: '#252623',
                    height: 50
                }
            }}
        >
            <rootTab.Screen name="Message" component={msg_Stack} options={{ tabBarBadge: 3 }} />
            <rootTab.Screen name="Friends" component={msg_Top_Tab} />
            <rootTab.Screen name="Profile" component={Tab1} />
            <rootTab.Screen name="Search" component={Search} />
            <rootTab.Screen name="Notification" component={Tab1} options={{ tabBarBadge: 6 }} />
        </rootTab.Navigator>
    );
}


class Tab2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, margin: 10, textAlign: "center" }}>Tab 2</Text>
                <Button title="Go To Tab1" onPress={() => this.props.navigation.navigate('Tab1')} />
            </View>
        );
    }
}

class Tab1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, margin: 10, textAlign: "center" }}>Profile</Text>
                <Button title="LogOut" onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}