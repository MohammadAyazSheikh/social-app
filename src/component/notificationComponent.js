import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, TextInput,
    SafeAreaView, Image, FlatList, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Users } from '../shared/user';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: Users,
        }
        this.renderNotifications = this.renderNotifications.bind(this);
    }

    renderNotifications = ({ item }) => {
        return (
            <View style={styles.row}>
                <View style={styles.userInfoRow}>
                    <View style={styles.imageRow}>
                        <Image
                            source={require('../shared/images/profile.png')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.NotifyDetailRow}>
                        <Text style={styles.userNameTxt}>{item.name}</Text>
                        <Text style={styles.detailTxt}>want's to be your friend</Text>
                        <Text style={styles.timeTxt}>2 mints ago</Text>
                    </View>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={{ ...styles.btnView, backgroundColor: "#e9413d", marginRight: 0 }}>
                        <Text style={styles.btnTxt}>Reject</Text>
                        <Icon color='white' name='times-circle' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.btnView, backgroundColor: "#4a9529" }}>
                        <Text style={styles.btnTxt}>Accept</Text>
                        <Icon color='white' name='check-circle' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

  
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.Users}
                        renderItem={this.renderNotifications}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </SafeAreaView >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: 'grey',
        marginTop:30
    },
    row: {
        flexDirection: 'row',
        alignContent: 'stretch',
        backgroundColor: 'grey',
        marginTop: 3,
        height: windowHeight / 100 * 10,
        marginRight: 5,
        marginLeft: 5,
        elevation: 2,
    },
    userInfoRow: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#252623',
    },
    imageRow: {
        //backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 3,
    },
    img: {
        width: windowWidth / 100 * 15,
        height: windowWidth / 100 * 15,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        alignSelf: 'center'
    },
    NotifyDetailRow: {
        flex: 2.5,
        flexDirection: 'column',
        margin: 3,
    },
    userNameTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    detailTxt: {
        color: 'white',
        fontSize: 13,
    },
    timeTxt: {
        color: 'grey',
        fontSize: 10,
    },
    btnRow: {
        flex: 1.2,
        backgroundColor: '#252623',
        flexDirection: 'row',
    }
    ,
    btnView: {
        backgroundColor: 'grey',
        flex: 1,
        flexDirection: 'column',
        //borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1.5,
    },
    btnTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    }

});