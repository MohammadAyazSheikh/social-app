import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Message from '../component/messageComponent';
import Chat from '../component/chatComponent';
import NewMsg from '../component/newMsgComponent';

const msgStack = createStackNavigator();

export default function msg_Stack() {
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
        </msgStack.Navigator>
    );
}