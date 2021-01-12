import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg:''
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.msgsContainer}>
                    <ScrollView>
                        <View style={styles.senderMsg}>
                            <Text style={styles.senderTxt}>
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                                
                            </Text>
                        </View>
                        <View style={styles.recvMsg}>
                            <Text style={styles.recvTxt}>
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                            </Text>
                        </View>
                        <View style={styles.senderMsg}>
                            <Text style={styles.senderTxt}>
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                            </Text>
                        </View>
                        <View style={styles.recvMsg}>
                            <Text style={styles.recvTxt}>
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                            </Text>
                        </View>
                        <View style={styles.recvMsg}>
                            <Text style={styles.recvTxt}>
                                opposed to using 'Content here, content here'
                                , making xcxcxc vxcvxcx cx it look like readable English
                            </Text>
                        </View>
                        <View style={styles.senderMsg}>
                            <Text style={styles.senderTxt}>
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                            </Text>
                        </View>
                        <View style={styles.recvMsg}>
                            <Text style={styles.recvTxt}>
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                            </Text>
                        </View>
                        <View style={styles.senderMsg}>
                            <Text style={styles.senderTxt}>
                               it look like readable English
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                            </Text>
                        </View>
                        <View style={styles.recvMsg}>
                            <Text style={styles.recvTxt}>
                                opposed to using 'Content here, content here'
                                , making it look like readable English
                            </Text>
                        </View>
                    </ScrollView>

                </View>
                <View style={styles.InputRow}>
                    <View style={styles.InputTxt}> 
                        <TextInput
                            placeholder='Type...'
                            style={styles.input}
                            multiline={true}
                            onChangeText = {(val) =>{ this.setState({msg:val})}}
                        />
                    </View>
                    <View style={this.state.msg?styles.InputBtnEnb:styles.InputBtnDis}>
                        <TouchableOpacity disabled={!this.state.msg?true:false}
                        onPress = {()=> {alert(this.state.msg)}}>
                           <Icon  name='paper-plane' size={24} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        //paddingTop:25,
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
    },
    msgsContainer: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'grey'//'#343531'
    },
    recvMsg: {
        backgroundColor:  '#343531',//'#E2B1B1',//'#01ABF4',//'#31c2fe',
        width: (windowWidth / 100) * 80,
        margin: 5,
        padding: 5,
        alignSelf: 'flex-end',
        borderRadius: 15,
        borderBottomRightRadius: 0,
        elevation:10
    },
    recvTxt: {
        fontSize: 15,
        padding:10,
        color: 'white'
    },
    senderMsg: {
        backgroundColor: 'white',
        width: (windowWidth / 100) * 80,
        margin: 5,
        padding: 5,
        alignSelf: 'flex-start',
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        elevation:10
    },
    senderTxt: {
        fontSize: 15,
        color: 'black',
        padding:10,
    },
    InputRow: {
        flex: 1,
        flexDirection: 'row',
       //justifyContent:'space-evenly',
        backgroundColor: 'white',
        alignItems:'baseline',
        backgroundColor: '#f4f6f4'
    },
    InputTxt:{
        flex:9,
    },
    InputBtnEnb:{
        flex:1,
        alignSelf:'center',
        backgroundColor:'#343531', 
        borderRadius:10,
        //paddingRight:5,
        paddingLeft:5,
        paddingTop:5,
        paddingBottom:5,
        marginRight:5
        
    },
    InputBtnDis:{
        flex:1,
        alignSelf:'center',
        backgroundColor:'#54554E', 
        borderRadius:10,
        //paddingRight:5,
        paddingLeft:5,
        paddingTop:5,
        paddingBottom:5,
        marginRight:5
        
    },
    input:{
        justifyContent:'center',
        height:windowHeight/100*9.5,
        width:windowHeight/100*48,
        marginTop:2,
        marginLeft:2,
        backgroundColor:'#e9ece9',
        fontSize:15
    },
});