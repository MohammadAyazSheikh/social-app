import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, TextInput,
    SafeAreaView, Image, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Users } from '../shared/user'

export default class ActiveFreinds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: Users,
            userSearch: ''
        }

    }
    renderUser = ({ item }) => {
        let uName = item.name.replace(/\s+/g, '').toLocaleLowerCase();

        if (uName.includes(this.state.userSearch)) {

            return (
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chat', { userName: item.name }) }}>
                    <View style={styles.rowUser}>
                        <View style={styles.imgBox}>
                            <Image
                                source={require('../shared/images/profile.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.nameBox}>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </View>
                        <View style={styles.btnDltBox}>
                            <View style={styles.btnDltTouch} >
                                <Icon name='circle' size={20} color='grey' style={styles.btnDlt} />
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            );
        }
        else {
            return (<View></View>)
        }

    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.txtInputView}>
                        <TextInput placeholder='search' style={styles.txtInput}
                            onChangeText={(value) => {
                                let str = value.replace(/\s+/g, '').toLocaleLowerCase();
                                this.setState({ userSearch: str });
                            }}
                            placeholderTextColor='white' />
                    </View>
                    <View style={styles.icon}>
                        <Icon name='search' size={30} color='#252623' />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.Users}
                        renderItem={this.renderUser}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignContent: 'stretch',
        backgroundColor: 'grey',
        marginTop: 5,
        height: 50,
        marginRight: 5,
        marginLeft: 5,
        elevation: 1,
    },
    txtInputView: {
        flex: 7,
    },
    txtInput: {
        textAlign: 'center',
        fontSize: 25,
        height: 50,
    },
    icon: {
        flex: 1,
        paddingTop: 10,
    },
    rowUser: {
        flexDirection: 'row',
        backgroundColor: '#E1E2DF',
        margin: 5,
        height: 90,
        elevation: 5
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderColor: '#252623',
        borderWidth: 1
    },
    imgBox: {
        margin: 5,
        flex: 4
    },
    nameBox: {
        flex: 11,
        justifyContent: 'center',
        marginLeft: 5
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    btnDltBox: {
        flex: 2,
        justifyContent: 'center',
        marginRight: 10,


    },
    btnDltTouch: {
        // backgroundColor: 'grey',
        borderRadius: 50,
        alignSelf: 'center',
        width: 20,
        height: 20,
        elevation: 5
    },
    btnDlt: {
        alignSelf: 'center',
        //padding: 5,
        color: 'green'
    }

});