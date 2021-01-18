import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,Image, FlatList, SafeAreaView
} from 'react-native';
import { msgs } from '../shared/msg'
import { FloatingAction } from "react-native-floating-action";


export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: msgs
        }

    }


    render() {
        const actions = [
            {
                color: '#252623',
                text: "New Message",
                icon: require("../shared/images/msg2.png"),
                name: "btnMsg",
                position: 1,
               // buttonSize:50
                //textBackground:'red'
                //textColor:'red'
            },
        ];
        const renderMsg = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => { 
                    this.props.navigation.navigate('Chat', { userName: item.name }) 
                    }}>
                    <View style={styles.row}>
                        <View style={styles.imgBox}>
                            <Image
                                source={require('../shared/images/profile.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.msgBox}>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.msg}>{item.msg}</Text>
                            </View>
                            <View>
                                <Text style={styles.Time}>{item.time}</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.msg}
                    renderItem={renderMsg}
                    keyExtractor={item => item.id.toString()}
                />
                <FloatingAction
                    color='#252623'
                    actions={actions}
                    onPressItem={name => {
                        //console.log(`selected button: ${name}`);
                        this.props.navigation.navigate('NewMsg');
                    }}
                />
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: '#EBEBEA',
        marginTop: 25
    },

    row: {
        height: 90,
        flexDirection: 'row',
        backgroundColor: '#E1E2DF',
        color: 'green',
        alignItems: 'center',
        margin:5,
        elevation:5
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        //backgroundColor: 'lightpink',
        borderColor: '#252623',
        borderWidth: 1
    },
    imgBox: {
        marginLeft: 5,
        marginRight: 20
    },
    msgBox: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    msg: {

    },
    Time: {
        color: 'grey',
        fontSize: 10,
        padding: 1
    }

});





