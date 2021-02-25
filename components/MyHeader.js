import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state = {
 value : "",
 userId : firebase.auth().currentUser.email,
    }
  }


  getNumberOfUnreadNotifications(){
    db.collection('all_notifications').where('notification_status','==',"unread")
    .onSnapshot((snapshot)=>{
      var unreadNotifications = snapshot.docs.map((doc) => doc.data())
      this.setState({
        value: unreadNotifications.length
      })
    })
  }

componentDidMount(){
  this.getNumberOfUnreadNotifications()
}
BellIconWithBadge=(props)=>{
  return(
    <View>
      <Icon name='bell' type='font-awesome' color='#696969' size={25}
        onPress={() =>this.props.navigation.navigate('Notifications')}/>
       <Badge
        value={this.state.value}
       containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
    </View>
  )
}
 render(){
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: this.props.title, style: { color: 'black', fontSize:20,fontWeight:"bold", fontFamily : 'TimesNewRoman'} }}
      rightComponent={<this.BellIconWithBadge {...this.props}/>}
      backgroundColor = "gold"
    />
  );
};
}

