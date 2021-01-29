import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, TextInput,
    SafeAreaView, Image, FlatList, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Users } from '../shared/user'
import { connect } from 'react-redux';
import { searchAction, } from '../redux/actions/searchActions';



const mapStateToProps = state => {
    return {
        User: state.User,
        searchedUsers: state.searchedUsers
    }
}


const mapDispatchToProps = dispatch => (
    {
        searchUsers: (user, token) => dispatch(searchAction(user, token))
    }
)

//export default 
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: Users,
            userSearch: ''
        }
    }



    renderUser = ({ item }) => {
      

         
        if (!this.props.searchedUsers.isLoading && this.state.userSearch != '') {
            return (

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chat', { userName: item.fname + " " + item.lname }) }}>
                    <View style={styles.rowUser}>
                        <View style={styles.imgBox}>
                            <Image
                                source={require('../shared/images/profile.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.nameBox}>
                            <View>
                                <Text style={styles.name}>{item.fname + " " + item.lname}</Text>
                            </View>
                        </View>
                        <View style={styles.btnDltBox}>
                            <TouchableOpacity style={styles.btnDltTouch} >
                                <Icon name='user-plus' size={30} color='grey' style={styles.btnDlt} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>

            );
        }
        else {

            return (
                <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop:50}}>
                    <ActivityIndicator size={27} color="#161730" />
                </View>
            );
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.txtInputView}>
                        <TextInput placeholder='search' style={styles.txtInput}
                            onChangeText={
                                (value) => {
                                    let str = value.replace(/\s+/g, '').toLocaleLowerCase();

                                    this.props.searchUsers(str, this.props.User.token);

                                    this.setState({ userSearch: str });
                                }}
                            placeholderTextColor='white' />
                    </View>
                    <View style={styles.icon}>
                        <Icon name='search' size={30} color='#252623' />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    {
                        this.state.userSearch ? <FlatList
                            data={this.props.searchedUsers.users}
                            renderItem={this.renderUser}
                            keyExtractor={item => item._id.toString()}
                        /> : <Text></Text>
                    }
                </View>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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
        marginTop: 30,
        height: 50,
        marginRight: 5,
        marginLeft: 5,
        elevation: 2,
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
        backgroundColor: 'grey',
        borderRadius: 50,
        alignSelf: 'center',
        width: 45,
        height: 45,
        elevation: 5
    },
    btnDlt: {
        alignSelf: 'center',
        paddingTop: 4,
        color: '#252623'
    }

});