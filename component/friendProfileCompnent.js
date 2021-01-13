import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
    Dimensions, Image, FlatList, SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ListItem } from 'react-native-elements';

import { msgs } from '../shared/msg'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { FloatingAction } from "react-native-floating-action";
import { ScrollView } from 'react-native-gesture-handler';


export default class FriendProfile extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        const { userName } = this.props.route.params;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.rowDisplay}>
                    <TouchableOpacity style={styles.btnBack}
                     onPress={() => { this.props.navigation.navigate('Friends')}}
                      >
                        <Icon name='arrow-circle-left' size={20} color='white' />
                    </TouchableOpacity>
                    <View style={styles.imageRow}>
                        <Image
                            source={require('../shared/images/profile.png')}
                            style={styles.img}
                        />
                        <View style={styles.uNameRow}>
                            <Text style={styles.nameTxt}>{userName ? userName : 'User'}</Text>
                        </View>
                    </View>
                    <View style={styles.btnRow}>
                        <TouchableOpacity style={styles.btnMsg}
                            onPress={() => { this.props.navigation.navigate('Chat', { userName: userName }) }}
                        >
                            <Icon name='envelope' size={20} color='white' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMsg}>
                            <Icon name='trash' size={20} color='white' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.followRow}>
                        <TouchableOpacity View style={styles.followingBox}>
                            <Text style={styles.TxtStyle}>56</Text>
                            <Text style={styles.TxtStyle}>Following</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.followBox}>
                            <Text style={styles.TxtStyle}>64</Text>
                            <Text style={styles.TxtStyle}>Followers</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.rowInfo}>
                        <View style={styles.infoFieldRow}>
                            <View style={styles.iconView}>
                                <Icon name='home' size={25} color='white' />
                                <Text style={styles.iconText}>Home</Text>
                            </View>
                            <View style={styles.infoTxtView}>
                                <Text style={styles.TxtInfo}>Karachi</Text>
                            </View>
                        </View>

                        <View style={styles.infoFieldRow}>
                            <View style={styles.iconView}>
                                <Icon name='heart' size={25} color='white' />
                                <Text style={styles.iconText}>Relation</Text>
                            </View>
                            <View style={styles.infoTxtView}>
                                <Text style={styles.TxtInfo}>Single</Text>
                            </View>
                        </View>

                        <View style={styles.infoFieldRow}>
                            <View style={styles.iconView}>
                                <Icon name='graduation-cap' size={25} color='white' />
                                <Text style={styles.iconText}>Relation</Text>
                            </View>
                            <View style={styles.infoTxtView}>
                                <Text style={styles.TxtInfo}>PAF-KIET</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
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
    },

    rowDisplay: {
        height: windowHeight / 100 * 45,
        flexDirection: 'column',
        backgroundColor: '#252623',//'#E1E2DF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBack: {
        flex: 0.1,
        alignSelf: 'flex-start',
        padding: 5
    },
    imageRow: {
        flex: 4,
        marginTop: windowHeight / 100 * 2,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
        //backgroundColor:'grey'
    },

    img: {
        width: windowWidth / 100 * 30,
        height: windowWidth / 100 * 30,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,

    },
    uNameRow: {
        alignSelf: 'center',
        marginTop: 5,

    },
    nameTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    btnRow: {
        flexDirection: 'row',
        flex: 1,
    },
    btnMsg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    followRow: {
        flex: 1.5,
        flexDirection: 'row',
        backgroundColor: 'grey',
        justifyContent: 'center',
        //alignItems:'center'
    },
    followingBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRightColor: '#252623',
        borderRightWidth: 0.5
    },
    followBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderLeftColor: '#252623',
        borderLeftWidth: 0.5
    },
    TxtStyle: {
        marginTop: 5,
        color: '#252623',
        fontSize: 15,
        fontWeight: 'bold',
    },
    rowInfo: {
        height: windowHeight / 100 * 55,
        flexDirection: 'column',
        backgroundColor: '#252623',//'#E1E2DF',
    },
    infoFieldRow: {
        flexDirection: 'row',
        margin: 10,
        borderColor: 'white',
        borderBottomWidth: 1,
        height: windowHeight / 100 * 10,
    },
    infoTxtView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TxtInfo: {
        color: 'white',
        fontSize: 15,
    },
    iconView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    },
});





