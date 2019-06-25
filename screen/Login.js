import React,{ Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput
  } from 'react-native';

import {
    Item,
    Input,
    Button,
    Header,
} from 'native-base';

import {
    createStackNavigator, createAppContainer,
} from 'react-navigation';
import ModalScreen from './Modal';

const AppNavigator = createStackNavigator({
    Modal: {
        screen: ModalScreen,
        navigationOptions: ({ navigation }) => ({
          header: null,
        }),
    }
});

const AppContainer = createAppContainer(AppNavigator);

class LoginScreen extends Component{
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
        this.user = React.createRef();
        this.pass = React.createRef();
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
                 source={require('../screen/img/blue.png')} 
                 style={{width:320,height:120}} 
                />
                <View
                 style={styles.headlang}
                >
                    <View
                     style={{
                         flex:1,flexDirection:'row',
                         alignSelf:'center',
                        }}
                    >
                        <Text
                         style={styles.mid} 
                         onPress={this.ina}
                        >
                    {this.state.title1} • 
                    </Text>
                    <Text 
                        style={styles.mid} 
                        onPress={this.may}
                    >
                     {this.state.title2} •
                    </Text>
                    <Text 
                        style={styles.mid}
                    >
                        {this.state.other}
                    </Text>
                    
                    </View>
                </View>
                <View 
                style={styles.form}
                >
                <Item
                 floatingLabel
                 style={styles.input}
                >
                    <TextInput 
                        underlineColorAndroid="#00ffff"
                        onChangeText={
                            (text) => this.setState({
                                username:text
                                })
                                }
                        placeholder={this.state.plemail}
                        blurOnSubmit={false}
                        ref={this.user}
                        onSubmitEditing={() => this.pass.current.focus()}
                        returnKeyType='next'
                    />
                </Item>
                <Item 
                floatingLabel
                style={styles.input}
                >
                    <TextInput 
                    secureTextEntry={true}
                    underlineColorAndroid="#00ffff" 
                    onChangeText={
                        (text) => this.setState({
                            username:text
                            })
                            } 
                    placeholder={this.state.plpass}
                    blurOnSubmit={false}
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
                 {this.state.forgText}
                </Text>
                    <Text 
                    style={{
                        marginLeft: 50,
                        marginTop: 30,
                        marginBottom:20
                        }}>
                            ────────── 
                            {this.state.or}
                            ──────────
                    </Text>
                <Button
                 success
                 style={{
                     marginLeft:50,
                     height:40,
                     width:220,
                     marginBottom:15
                     }}>
                    <Text 
                    style={
                        styles.tnewc
                    }>
                    {this.state.creAcc}
                    </Text>
                </Button>
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
      marginTop: 2,
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
  
export default LoginScreen