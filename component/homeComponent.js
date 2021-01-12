import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //   const {id, name} =  this.props.route.params;
        return (
            <View style={styles.containerMain}>
                <LinearGradient
                    colors={['#151823', '#343531']} //  #252623
                    style={styles.container}>

                    <View style={styles.logoRow}>
                        <Icon style = {styles.logo} name='american-sign-language-interpreting' size={80} color='white' />
                        <Text style={styles.logoText}>Rabtay</Text>
                    </View>

                    <View style={styles.InputRow}>
                        <View style={styles.InputItem}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')} >
                                    <Text style={styles.btn}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.InputItem}>
                            <Text style={styles.txt}>Don't Have Account?</Text>
                            <Text style={styles.txt}>SignUp Now..!</Text>
                        </View>
                        <View style={styles.InputItem}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={styles.btn}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>

            </View >

            // {/* <Button title="Go To Root" onPress={() => this.props.navigation.navigate('RootTab')} /> */}

        );
    }
}


const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
        //backgroundColor: '#161730',
    },
    logoRow: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor:'grey',
        
    },
    logoText: {
        fontSize: Math.round((windowWidth / 100) * 10),
        color: 'white',
        fontWeight: 'bold',
    },
    logo: {
        fontSize: Math.round((windowWidth / 100) * 25),
        color: 'white',
    },
    InputRow: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',

    },
    InputItem: {

        width: Math.round((windowWidth / 100) * 90),
        margin: 10
    },
    btn: {
        color: '#151823',
        fontSize: 25,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        width: Math.round((windowWidth / 100) * 80),
        textAlign: "center",
        fontWeight: 'bold',
        elevation:10
    },
    txt: {
        color: 'white',
        fontSize: 13,
        alignSelf: 'center',
        padding: 5,
        textAlign: "center",
        fontWeight: 'bold',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
});