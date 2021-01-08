import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, colors } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { _ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //   const {id, name} =  this.props.route.params;
        return (
            <View style={styles.container}>
                <View style={styles.logoRow}>
                    <Text style={styles.logoText}>Social App</Text>
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
                            <Text style={styles.btn}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            // {/* <Button title="Go To Root" onPress={() => this.props.navigation.navigate('RootTab')} /> */}

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: '#161730'
    },
    logoRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        // marginTop:50,
        // marginBottom:60
    },
    logoText: {
        fontSize: Math.round((windowWidth / 100) * 15),
        color: 'white',
        fontWeight: 'bold',
        
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
        color: '#161730',
        fontSize: 25,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        width: Math.round((windowWidth / 100) * 80),
        textAlign: "center",
        fontWeight: 'bold',
    },
    txt: {
        color: 'grey',
        fontSize: 15,
        alignSelf: 'center',
        padding: 5,
        textAlign: "center",
        fontWeight: 'bold'
    }
});