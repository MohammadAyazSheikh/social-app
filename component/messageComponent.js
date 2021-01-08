import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
    Dimensions, TextInput, Image, FlatList
}
    from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,ListItem} from 'react-native-elements';

import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import {msgs} from '../shared/msg'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: msgs
        }

    }

    render() {
        const  renderMsg = ({item}) => {
            return (
                <TouchableOpacity onPress = {()=> { this.props.navigation.navigate('Chat',{userName:item.name})}}>
                    <View style={styles.row}>
                        <View style={styles.imgBox}>
                            <Image
                                source={require('../shared/images/profile.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.msgBox}>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.msg}>{item.msg}</Text>
                            </View>
                            <View>
                                <Text style={styles.Time}>{item.time}</Text>
                            </View>
                        </View>
        
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.msg}
                    renderItem={renderMsg}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

// function renderMsg({item}) {
//     return (
//         <TouchableOpacity onPress = {()=> { item.navigate('SignUp')}}>
//             <View style={styles.row}>
//                 <View style={styles.imgBox}>
//                     <Image
//                         source={require('../shared/images/profile.png')}
//                         style={styles.img}
//                     />
//                 </View>
//                 <View style={styles.msgBox}>
//                     <View>
//                         <Text style={styles.name}>{item.name}</Text>
//                     </View>
//                     <View>
//                         <Text style={styles.msg}>{item.msg}</Text>
//                     </View>
//                     <View>
//                         <Text style={styles.Time}>{item.time}</Text>
//                     </View>
//                 </View>

//             </View>
//         </TouchableOpacity>
//     );
// }
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: 'skyblue',
    },

    row: {
        height: 90,
        flexDirection: 'row',
        backgroundColor: 'white',
        color: 'green',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1.5
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        //backgroundColor: 'lightpink',
        borderColor: 'grey',
        borderWidth: 1
    },
    imgBox: {
        marginLeft: 5,
        marginRight: 20
    },
    msgBox: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    msg: {

    },
    Time: {
        color: 'grey',
        fontSize: 10,
        padding: 1
    }

});





