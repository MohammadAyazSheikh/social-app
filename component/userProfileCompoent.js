import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, TouchableHighlight,
    Dimensions, Image, Modal, SafeAreaView, Alert, TextInput
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
        this.state = {
            isModalOpen: false,
            editName: '',
            editVal: ''
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    render() {


        return (
            <SafeAreaView style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isModalOpen}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{'Edit ' + this.state.editName}</Text>
                            <TextInput
                                placeholder={'Edit ' + this.state.editName}
                                multiline={true}
                                onChangeText={(val) => { this.setState({ editVal: val }) }}
                                style={styles.input}
                            />
                            <View style={styles.modalBtnRow}>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, marginRight: 15 }}
                                    onPress={() => {
                                        this.toggleModal()
                                    }}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, marginLeft: 15 }}
                                    onPress={() => {
                                        Alert.alert('Changes Done..!')
                                        this.toggleModal()
                                    }}>
                                    <Text style={styles.textStyle}>Done</Text>
                                </TouchableHighlight>
                            </View>

                        </View>
                    </View>
                </Modal>
                <View style={styles.rowDisplay}>
                    <View style={styles.imageRow}>
                        <Image
                            source={require('../shared/images/profile.png')}
                            style={styles.img}
                        />
                        <View style={styles.uNameRow}>
                            <Text style={styles.nameTxt}>Ali Sheikh</Text>
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
                                <View style={styles.TxtInfo}>
                                    <Text style={styles.TxtInfoInner}>Karachi</Text>
                                </View>
                                <TouchableOpacity style={styles.editBtn}
                                    onPress={() => { this.toggleModal(); this.setState({ editName: 'City' }) }}>
                                    <Icon name='edit' size={35} color='white' />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.infoFieldRow}>
                            <View style={styles.iconView}>
                                <Icon name='heart' size={25} color='white' />
                                <Text style={styles.iconText}>Relation</Text>
                            </View>
                            <View style={styles.infoTxtView}>
                                <View style={styles.TxtInfo}>
                                    <Text style={styles.TxtInfoInner}>Single </Text>
                                </View>
                                <TouchableOpacity style={styles.editBtn}
                                    onPress={() => { this.toggleModal(); this.setState({ editName: 'Relationship' }) }}>
                                    <Icon name='edit' size={35} color='white' />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.infoFieldRow}>
                            <View style={styles.iconView}>
                                <Icon name='graduation-cap' size={25} color='white' />
                                <Text style={styles.iconText}>Education</Text>
                            </View>

                            <View style={styles.infoTxtView}>
                                <View style={styles.TxtInfo}>
                                    <Text style={styles.TxtInfoInner}>PAF-KIET</Text>
                                </View>
                                <TouchableOpacity style={styles.editBtn}
                                    onPress={() => { this.toggleModal(); this.setState({ editName: 'Education' }) }}>
                                    <Icon name='edit' size={35} color='white' />
                                </TouchableOpacity>
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
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 5
    },
    TxtInfo: {
        flex: 3,
    },
    TxtInfoInner: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center'
    },
    editBtn: {
        flex: 1
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
        marginLeft: 5,
        marginRight: 10
    },



    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalBtnRow: {
        flexDirection: 'row'
    }
    ,
    openButton: {
        backgroundColor: '#252623',
        borderRadius: 20,
        padding: 15,
        elevation: 2,
    },
    textStyle: {
        color: '#EBEBEA',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    modalText: {
        color: '#252623',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },


    input: {
        textAlign: 'center',
        height: windowHeight / 100 * 8,
        width: windowHeight / 100 * 30,
        margin: 20,
        padding: 5,
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'grey',
        fontSize: 14
    }


});





