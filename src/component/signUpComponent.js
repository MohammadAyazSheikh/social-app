import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';
import { Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { LinearGradient } from 'expo-linear-gradient'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            pass: '',
            date: new Date(),
        }
        this.handeSubmit = this.handeSubmit.bind(this);
    }

    handeSubmit(name, email, pass, dob) {
        alert("Submit\n" + "Name: " + name + "\nEmail: " + email + "\nPass: " + pass + "\nDOB: " + dob)
    }

    render() {
        //   const {id, name} =  this.props.route.params;
        return (



            <View style={styles.containerMain}>
                <LinearGradient
                    colors={['#151823', '#343531']}
                    style={styles.container}>
                    <ScrollView>
                        <View style={styles.logoRow}>
                            <Icon style={styles.logo} name='american-sign-language-interpreting' size={80} color='white' />
                        </View>

                        <View style={styles.InputItem}>
                            <Input
                                placeholder="Name"
                                secureTextEntry={true}
                                style={{ color: 'white', marginLeft: 20 }}
                                leftIcon={<Icon name='user' size={24} color='white' />}
                                onChangeText={value => this.setState({ name: value })}
                            />
                        </View>
                        <View style={styles.InputRow}>
                            <View style={styles.InputItem}>
                                <Input
                                    placeholder="Email"
                                    leftIcon={<Icon name='at' size={24} color='white' />
                                    }
                                    style={{ color: 'white', marginLeft: 20 }}
                                    onChangeText={value => this.setState({ email: value })}
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
                                    onChangeText={value => this.setState({ pass: value })}
                                />
                            </View>

                            <View style={styles.dateRow}>
                                <View style={styles.dateLable}>
                                    <Text style={styles.dateTxt}>DOB</Text>
                                </View>
                                <View style={styles.date}>
                                    <DatePicker
                                        style={{ width: 200, backgroundColor: 'white' }}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        minDate="1900-05-01"
                                        maxDate="2050-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                marginLeft: 0,
                                            },
                                            dateInput: {
                                                marginLeft: 36,
                                                backgroundColor: 'white',
                                            },
                                            dateText: {
                                                color: '#161730',
                                                fontWeight: 'bold'
                                            },
                                        }}
                                        onDateChange={(date) => { this.setState({ date: date }); console.log(this.state.date) }}
                                    />
                                </View>

                            </View>
                            <View style={styles.InputItem}>
                                <TouchableOpacity disabled={!(this.state.date && this.state.email && this.state.pass && this.state.name)}
                                    onPress={() => { this.handeSubmit(this.state.name, this.state.email, this.state.pass, this.state.date) }}>
                                    <Text style={(this.state.date && this.state.email && this.state.pass && this.state.name) ? styles.btnEnbl : styles.btnDis}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.InputItem}>
                                <Text style={styles.txt}>Or SignUp With</Text>
                            </View>
                        </View>
                        <View style={styles.socialRow}>

                            <TouchableOpacity onPress={(date) => { this.showDatepicker(date) }} >
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
                </LinearGradient>
            </View>

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
    },
    logoRow: {
        //flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 60
    },
    logo: {
        fontSize: Math.round((windowWidth / 100) * 25),
        color: 'white',
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
    },
    dateRow: {
        marginBottom: 25,
        flexDirection: 'row',
        //justifyContent:'space-evenly'
    },
    dateLable: {
        flex: 1,
        justifyContent: 'center'
    },
    date: {
        flex: 2,
        justifyContent: 'center'
    },
    dateTxt: {
        left: 50,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }

});