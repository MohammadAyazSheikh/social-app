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


export default class UserProfile extends Component {
    constructor(props) {
        super(props);

    }


    render() {


        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.rowDisplay}>
                    <View style={styles.imageRow}>
                        <Image
                            source={require('../shared/images/profile.png')}
                            style={styles.img}
                        />
                        <View style={styles.uNameRow}>
                            <Text style={styles.nameTxt}>Ali Sheikh</Text>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity style={styles.btnMsg}>
                                <Icon name='envelope' size={20} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnMsg}>
                                <Icon name='trash' size={20} color='white' />
                            </TouchableOpacity>
                        </View>

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
        marginTop: 25
    },

    rowDisplay: {
        height: windowHeight / 100 * 40,
        flexDirection: 'column',
        backgroundColor: '#252623',//'#E1E2DF',
        alignItems: 'center',

        //  margin: 5,
        //  elevation: 5
    },
    imageRow: {
        flex: 3,
        marginTop: windowHeight / 100 * 5,
    },
    img: {
        width: windowWidth / 100 * 30,
        height: windowWidth / 100 * 30,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    uNameRow: {
        alignSelf: 'center',
        marginTop: 5
    },
    nameTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn: {
        flexDirection: 'row'
    },
    followRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'grey',
        //margin:2
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
        height: windowHeight / 100 * 60,
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





