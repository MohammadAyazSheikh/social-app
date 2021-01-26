import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Dimensions, Switch } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { LinearGradient } from 'expo-linear-gradient'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { connect } from 'react-redux';
import { Register } from '../redux/actions/signupActions';
import { ClearUser } from '../redux/actions/clearUserAction';

const mapStateToProps = state => {
    return {
        User: state.User,
    }
}

const mapDispatchToProps = dispatch => (
    {
        Register: (Fname, Lname, email, pass, dob, addr, edu, gender) =>
            dispatch(Register(Fname, Lname, email, pass, dob, addr, edu, gender)),

        clearUser: () =>
            dispatch(ClearUser)
    }
)



class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            education: '',
            address: '',
            email: '',
            pass: '',
            dob: new Date(),
            // userInfo: this.props.User,
            genderSwitch: false,
            // enableSwitch: false,
        }
        this.handeSubmit = this.handeSubmit.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
    }


    // componentDidMount() {

    //     setTimeout(() => {
    //         alert(JSON.stringify(this.props.User))
    //     }, 2000);
    // }
    handeSubmit(Fname, Lname, email, pass, dob, addr, edu, gender) {

        //alert("Submit\n" + "Name" + Fname + " " + Lname + "\nEmail\n" + email + "\nPass: " + pass + "\nDOB: " + dob);
        this.props.Register(Fname, Lname, email, pass, dob, addr, edu, gender);
    }

    toggleSwitch() {
        this.setState({ genderSwitch: !this.state.genderSwitch });
    }
    componentDidMount() {
        this.props.clearUser();
    }

    componentDidUpdate() {
        if (this.props.User.success == true) {
            alert('Registration Successfull');
            this.props.navigation.navigate('RootTab');
        }
    }

    render() {
        return (
            <View style={styles.containerMain}>
                <LinearGradient
                    colors={['#151823', '#343531']}
                    style={styles.container}>
                    <ScrollView>
                        <View style={styles.logoRow}>
                            <Icon style={styles.logo} name='american-sign-language-interpreting' size={80} color='white' />
                        </View>

                        <View style={styles.InputRow}>
                            <View style={styles.InputItem}>
                                <Input
                                    placeholder="First Name"
                                    style={{ color: 'white', marginLeft: 20 }}
                                    leftIcon={<Icon name='user' size={24} color='white' />}
                                    onChangeText={value => this.setState({ fname: value })}
                                    disabled={this.props.User.isLoading}
                                />
                            </View>
                            <View style={styles.InputItem}>
                                <Input
                                    placeholder="Last Name"
                                    style={{ color: 'white', marginLeft: 20 }}
                                    leftIcon={<Icon name='user' size={24} color='white' />}
                                    onChangeText={value => this.setState({ lname: value })}
                                    disabled={this.props.User.isLoading}
                                />
                            </View>
                            <View style={styles.InputItem}>
                                <Input
                                    placeholder="Address"
                                    style={{ color: 'white', marginLeft: 20 }}
                                    leftIcon={<Icon name='home' size={24} color='white' />}
                                    onChangeText={value => this.setState({ address: value })}
                                    disabled={this.props.User.isLoading}
                                />
                            </View>
                            <View style={styles.InputItem}>
                                <Input
                                    placeholder="Education"
                                    style={{ color: 'white', marginLeft: 20 }}
                                    leftIcon={<Icon name='graduation-cap' size={24} color='white' />}
                                    onChangeText={value => this.setState({ education: value })}
                                    disabled={this.props.User.isLoading}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row', borderBottomColor: 'grey',
                                borderBottomWidth: 1.3, paddingBottom: 5,
                                width: Math.round((windowWidth / 100) * 85),
                                marginBottom: 30,
                                marginTop: 15
                            }}>
                                {/* flexDirection: 'row', borderLeftColor:'grey',borderBottomWidth:1  */}
                                <View style={{ flex: 1 }}>
                                    <Switch
                                        trackColor={{ false: "grey", true: "grey" }}
                                        thumbColor={this.state.enableSwitch ? "skyblue" : "lightpink"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={this.toggleSwitch}
                                        value={this.state.genderSwitch}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    {
                                        this.state.genderSwitch ? <Text style={styles.toggleTxt}>Male</Text> : <Text style={styles.toggleTxt}>Female</Text>
                                    }
                                </View>
                            </View>

                            <View style={styles.InputItem}>
                                <Input
                                    placeholder="Email/Username"
                                    leftIcon={<Icon name='at' size={24} color='white' />
                                    }
                                    style={{ color: 'white', marginLeft: 20 }}
                                    onChangeText={value => this.setState({ email: value })}
                                    disabled={this.props.User.isLoading}
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
                                    disabled={this.props.User.isLoading}
                                />
                            </View>

                            <View style={styles.dateRow}>
                                <View style={styles.dateLable}>
                                    <Text style={styles.dateTxt}>DOB</Text>
                                </View>
                                <View style={styles.date}>
                                    <DatePicker
                                        style={{ width: 200, backgroundColor: 'white' }}
                                        date={this.state.dob}
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
                                        onDateChange={(date) => { this.setState({ dob: date }); }}
                                    />
                                </View>

                            </View>
                            <View style={styles.InputItem}>
                                <TouchableOpacity
                                    //disabled={!(this.state.date && this.state.email && this.state.pass && this.state.Fname, this.state.Fname)}
                                    onPress={() => {
                                        this.handeSubmit(this.state.fname, this.state.lname, this.state.email, this.state.pass,
                                            this.state.dob, this.state.address, this.state.education, this.state.genderSwitch);
                                    }}
                                >

                                    {
                                        this.props.User.isLoading ?
                                            <View style={styles.btnEnbl}>
                                                <ActivityIndicator size={27} color="#161730" />
                                            </View>
                                            :
                                            <Text style={(this.state.date && this.state.email && this.state.pass && this.state.fname, this.state.fname,
                                                this.state.Education, this.state.Address) ? styles.btnEnbl : styles.btnDis}>Sign Up</Text>

                                    }

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
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
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
    },
    toggleTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }

});