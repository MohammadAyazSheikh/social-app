import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, colors } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
        }
        this.logInHandle = this.logInHandle.bind(this);
    }

    logInHandle(email, pass) {
      
        if (this.state.email && this.state.pass) {
            alert("LogIn\nEmail: " + email + " Pass: " + pass);
        }
        this.props.navigation.navigate('RootTab');
    }

    render() {

        //this.LogInEnable();
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.logoRow}>
                        <Text style={styles.logoText}>Log In Now</Text>
                    </View>
                    <View style={styles.InputRow}>
                        <View style={styles.InputItem}>
                            <Input
                                placeholder="Email"
                                leftIcon={<Icon name='at' size={24} color='white' />
                                }
                                style={{ color: 'white', marginLeft: 20 }}
                                onChangeText={value => { this.setState({ email: value}); }}
                            //    errorStyle={{ color: 'red' }}
                            //    errorMessage='ENTER A VALID ERROR HERE'
                            />
                        </View>
                        <View style={styles.InputItem}>
                            <Input
                                placeholder="Password"
                                secureTextEntry={true}
                                style={{ color: 'white', marginLeft: 20 }}
                                leftIcon={<Icon name='key' size={24} color='white' />}
                                onChangeText={value => { this.setState({ pass: value});}}
                            />
                        </View>
                        <View style={styles.InputItem}>
                            <TouchableOpacity disabled={!(this.state.pass && this.state.email)}
                                onPress={() => { { this.logInHandle(this.state.email, this.state.pass)}; }}>
                                <Text style={(this.state.pass && this.state.email)?styles.btnEnbl:styles.btnDis}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.InputItem}>
                            <Text style={styles.txt}>Or LogIn With</Text>
                        </View>
                    </View>
                    <View style={styles.socialRow}>

                        <TouchableOpacity >
                            <View style={styles.facebookItem}>
                                <View style={styles.fbLogo}>
                                    <Icon
                                        name="facebook-f"
                                        size={30}
                                        color="white"
                                    />
                                </View>
                                <Text style={styles.fbBtn}>Facebook</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <View style={styles.googleItem}>
                                <View style={styles.googleLogo}>
                                    <Icon
                                        name="google"
                                        size={30}
                                        color="white"
                                    />
                                </View>
                                <Text style={styles.googleBtn}>Google</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
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
        //flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 60
    },
    logoText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    InputRow: {
        //flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },
    InputItem: {

        width: Math.round((windowWidth / 100) * 90),
        margin: 10
    },
    btnEnbl: {
        color: '#161730',
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        width: Math.round((windowWidth / 100) * 80),
        textAlign: "center",
        fontWeight: 'bold'

    },
    btnDis: {
        color: '#161730',
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 100,
        width: Math.round((windowWidth / 100) * 80),
        textAlign: "center",
        fontWeight: 'bold'

    },
    txt: {
        color: 'grey',
        fontSize: 15,
        alignSelf: 'center',
        padding: 5,
        textAlign: "center",
        fontWeight: 'bold'
    },
    socialRow: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 40
    },
    facebookItem: {
        flexDirection: 'row',
        backgroundColor: "#3a5593",
        width: Math.round((windowWidth / 100) * 80),
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center'
    },
    fbBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 5,
    },
    fbLogo: {
        marginRight: 5,
        padding: 5
    },
    googleItem: {
        flexDirection: 'row',
        backgroundColor: "#e34133",
        width: Math.round((windowWidth / 100) * 80),
        borderRadius: 20,
        justifyContent: 'center'
    },
    googleBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 5,
    },
    googleLogo: {
        marginRight: 5,
        padding: 5
    }
});