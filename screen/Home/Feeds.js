import React,{ Component } from 'React';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Container,
    Header,
    Text,
    Item,
    Input,
    Icon,
    Button,
    Content,
    Body,
    Tab,
    Tabs,
    TabHeading,
    Card,
    CardItem
} from 'native-base';

import {
    createAppContainer, createStackNavigator
} from 'react-navigation';

import MenuScreen from '../Menu/Menu';
import GroupScreen from '../Groups/Groups';
import NotifScreen from '../Notification/Notif';
import ProfileScreen from '../Profile/Profile';
import VideoScreen from '../Watch/Video';

class FeedScreen extends Component{
    render(){
        return(
            <View>
                <View>
                <Container>
                    <Header rounded  >
                    <Item>
                        <Icon name="ios-camera" style={{fontSize:40, color: "white",}} />
                        
                        <Item style={{width:220, height: 40}}>
                            <Icon active name='search' style={{color: "white",}} />
                            <Input placeholder='Search' style={{color:'white'}}/>
                        </Item>
                        <Icon name="ios-chatbubbles" style={{fontSize:40,marginLeft:10, color: "white",}} />
                        
                    </Item>
                </Header> 
                
                </Container>
                
                </View>
                <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={require('../img/home-active.png')} style={{width:30,height:30}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={require('../img/group-inactive.png')} style={{width:30,height:30}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={require('../img/video-inactive.png')} style={{width:30,height:30}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={require('../img/prof-inactive.png')} style={{width:30,height:30}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={require('../img/bell-inactive.png')} style={{width:40,height:40}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={require('../img/menu-inactive.png')} style={{width:25,height:25}} />
                </TouchableOpacity>
                </View>
                <View style={styles.inputstat}>
                <Body >
                <Text>jkljkljkljklk</Text>
                </Body>
                </View>
            </View>
            
        )
    }
}
export default FeedScreen

const styles = StyleSheet.create({
    inputstat:{
        margin: 5,
        width:300,
        height: 70,
        backgroundColor: 'White'
    },
    container: {
      flex: 1
    },
    navBar: {
      height: 55,
      backgroundColor: 'white',
      elevation: 3,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    rightNav: {
      flexDirection: 'row'
    },
    navItem: {
      marginLeft: 25
    },
    body: {
      flex: 1
    },
    tabBar: {
        marginTop:60,
      backgroundColor: 'white',
      height: 60,
      borderTopWidth: 0.5,
      borderColor: '#E5E5E5',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabTitle: {
      fontSize: 11,
      color: '#3c3c3c',
      paddingTop: 4
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15
    },
    videoTitle: {
        fontSize: 16,
        color: '#3c3c3c'
    },
    videoDetails: {
        paddingHorizontal: 15,
        flex: 1
    },
    videoStats: {
        fontSize: 15,
        paddingTop: 3
    }
  });