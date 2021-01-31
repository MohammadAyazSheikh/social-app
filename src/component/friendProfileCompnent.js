import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
    Dimensions, Image, SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ScrollView } from 'react-native-gesture-handler';





export default class FriendProfile extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        const { userInfo } = this.props.route.params;
        return (
            <SafeAreaView style={styles.container}>
                <View style={ userInfo?{...styles.rowDisplay, marginTop:20}: styles.rowDisplay}>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => { this.props.navigation.navigate(userInfo?'searchScreen':'Friends') }} >
                        <View>
                            <Icon name='arrow-circle-left' size={30} color='white' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.imageRow}>
                        <Image
                            source={require('../shared/images/profile.png')}
                            style={styles.img}
                        />
                        <View style={styles.uNameRow}>
                            <Text style={styles.nameTxt}>{userInfo ? userInfo.fname + " " + userInfo.lname : 'User'}</Text>
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
                                <Text style={styles.TxtInfo}>{userInfo ? userInfo.addr : "address"}</Text>
                            </View>
                        </View>

                        <View style={styles.infoFieldRow}>
                            <View style={styles.iconView}>
                                <Icon name='venus-mars' size={25} color='white' />
                                <Text style={styles.iconText}>Gender</Text>
                            </View>
                            <View style={styles.infoTxtView}>
                                {
                                    userInfo && userInfo.gender ?
                                        <Text style={styles.TxtInfo}>Male</Text>
                                        : <Text style={styles.TxtInfo}>Female</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.infoFieldRow}>
                            <View style={styles.iconView}>
                                <Icon name='graduation-cap' size={25} color='white' />
                                <Text style={styles.iconText}>Education</Text>
                            </View>
                            <View style={styles.infoTxtView}>
                                <Text style={styles.TxtInfo}>{userInfo ? userInfo.edu : "School"}</Text>
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
        backgroundColor: '#252623',
    },

    rowDisplay: {
        height: windowHeight / 100 * 45,
        flexDirection: 'column',
        backgroundColor: '#252623',//'#E1E2DF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBack: {
        flex: 1,
        alignSelf: 'flex-start',
        padding: 5
    },
    imageRow: {
        flex: 2,
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
        justifyContent: 'center',
        marginBottom: 5
    },
    TxtInfo: {
        color: 'white',
        fontSize: 15,
    },
    iconView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white',
        marginBottom: 5
    },
    iconText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    },
});





