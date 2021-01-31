import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../component/searchComponent';
import UserProfile from '../component/userProfileCompoent';
import Notification from '../component/notificationComponent';
import msg_Stack from './messageStack';
import Friends_Top_Tab from './friendTopTab';
import search_Stack from './serachStack';

const rootTab = createBottomTabNavigator();


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
            <rootTab.Screen name="Friends" component={Friends_Top_Tab} />
            <rootTab.Screen name="Profile" component={UserProfile} />
            <rootTab.Screen name="Search" component={search_Stack} />
            <rootTab.Screen name="Notification" component={Notification} options={{ tabBarBadge: 6 }} />
        </rootTab.Navigator>
    );
}


