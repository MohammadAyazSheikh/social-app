import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Message from '../component/messageComponent';
import Chat from '../component/chatComponent';
import { Text, View, Button } from 'react-native';



const msgStack = createStackNavigator();

const rootTab = createBottomTabNavigator();

function msg_Stack() {
    return (
        <msgStack.Navigator initialRouteName="msg"
            screenOptions={{
                style: {
                    textAlign: 'center'
                },
                headerStyle: {
                    backgroundColor: '#eb6534',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginRight: 50
                },
            }}
        >
            <msgStack.Screen name="msg" component={Message}
                options={{ title: 'Messages' }}
                options={{
                    headerShown: false
                }} />
            <msgStack.Screen name="Chat" component={Chat}
                options={({ route }) => ({ title: route.params.userName })}
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
                            iconName = 'commenting'
                        } else if (route.name === 'Friend') {
                            iconName = 'users'
                            //iconName = focused ? 'at' : 'facebook';
                        } else if (route.name === 'Profile') {
                            iconName = 'user-circle-o'
                        }
                        else if (route.name === 'Search') {
                            iconName = 'search'
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })
            }

            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#b5dfca',
                showLabel: false,
                showIcon: true,
                // labelStyle: {
                //   fontSize: 15,
                // },
                style: {
                    backgroundColor: '#eb6534',
                    height: 50
                }
            }}
        >
            <rootTab.Screen name="Message" component={msg_Stack} options={{ tabBarBadge: 3 }} />
            <rootTab.Screen name="Friend" component={Tab1} />
            <rootTab.Screen name="Profile" component={Tab1} />
            <rootTab.Screen name="Search" component={Tab1} />
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