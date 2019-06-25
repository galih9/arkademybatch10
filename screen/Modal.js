import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import {
  Item,
  Input,
  Button,
  Header,
} from 'native-base';


class ModalScreen extends Component{

    constructor() {
        super()
        this.state = {       
           title1: 'Bahasa Indonesia',
           title2: 'Bahasa Malaysia',
           other: 'More...',
           plemail: 'Phone or email',
           plpass: 'Password',
           logButtonTxt: 'Log In',
           forgText: 'Forgot Password?',
           or: 'or',
           creAcc: 'Create Facebook Account',
        }
    }

    ina = () =>{
        this.setState({
          title1: 'English',
          title2: 'Bahasa Malaysia',
          plemail: 'Telepon atau Email',
          plpass: 'Password',
          logButtonTxt: 'Masuk',
          forgText: 'Lupa Kata Sandi?',
          or: 'atau',
          creAcc: 'Buat Akun Facebook Baru',
          other: 'Lainnya...'
      })
    }

    may = () =>{
        this.setState({
          title1: 'Bahasa Indonesia',
          title2: 'Bahasa Malaysia',
          plemail: 'Telefon atau E-mel',
          plpass: 'Kata Laluan',
          logButtonTxt: 'Daftar Masuk',
          forgText: 'Terlupa Kata Laluan?',
          or: 'atau',
          creAcc: 'Cipta Akaun Facebook Baharu',
          other: 'Lagi...'
      })
    }
    

    render(){
        return(
            <View>
                <Image
                 source={require('../screen/img/white.png')} 
                 style={{width:320,height:120}} 
                />
                <View 
                style={styles.form}
                >
                <Item
                 floatingLabel
                 style={styles.input}
                >
                    <Input 
                        underlineColorAndroid="#00ffff"
                        onChangeText={
                            (text) => this.setState({
                                username:text
                                })
                                }
                        placeholder={this.state.plemail}
                    />
                </Item>
                <Item 
                floatingLabel
                style={styles.input}
                >
                    <Input 
                    secureTextEntry={true}
                    underlineColorAndroid="#00ffff" 
                    onChangeText={
                        (text) => this.setState({
                            username:text
                            })
                            } 
                    placeholder={this.state.plpass}
                    />
                </Item>
                <Button 
                primary 
                style={{
                    marginLeft:50,
                    height:40,
                    width:220,
                    marginTop:20
                    }}
                onPress={()=>this.props.navigation.navigate('Feeds')}
                >
                    <Text
                     style={styles.tlog}
                     >
                     {this.state.logButtonTxt}
                     </Text>
                </Button>
                
                </View>
                <Text
                 style={
                     styles.tforg
                 }>
                 {this.state.creAcc}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mid:{
      textAlign:'center',
      marginTop: 5,
    },
    headlang:{
      backgroundColor: 'white',
      width:320,
      height:30,
    },
    form:{
      width:320,
      height:200,
      marginTop: 50,
      backgroundColor:'white',
    },
    input:{
      marginTop:5,
      borderColor: 'blue',
      width:220,
      marginLeft:50,
      fontSize: 20,
    },
    logButton:{
      marginTop: 20,
      width: 220,
      height: 50,
      marginLeft: 50,
      backgroundColor: '#235ab2',
      borderRadius: 5,
    },
    tlog:{
      fontSize: 15,
      color: "white",
      marginLeft: 90,
      marginTop: 3,
      fontWeight: "bold",
    },
    tforg:{
      fontWeight: "bold",
      textAlign: "center",
      color: "#235ab2",
      fontSize: 15,
    },
    newcButton:{
      marginTop: 20,
      width: 220,
      height: 40,
      marginLeft: 50,
      backgroundColor: '#0cbc00',
      borderRadius: 5,
    },
    tnewc:{
      fontSize: 15,
      color: "white",
      alignSelf: "center",
      marginTop: 3,
      marginLeft: 23,
      fontWeight: "bold",
    }
  });
  
export default ModalScreen