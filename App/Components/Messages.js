/**
 * Created by devin on 1/14/16.
 */
var React = require('react-native');
var api = require('../Utils/api');
var Separator = require('./Helpers/Separator');

var {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableHighlight
  } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10,
    //alignSelf: 'flex-end' --> aligns messages to right
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

class Messages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      note: ''
    }
  }

  render(){
    let allMessages = this.props.messages.map((message, i) => {
     return (
       <View key = {i} style={styles.rowContainer}>
         <Text> {message.user}: </Text>
         <Text> {message.message} </Text>
         <Separator />
       </View>
     )
    });
    return (
      <ScrollView style={styles.container}>
        {allMessages}
        </ScrollView>
    )
  }
}

// Notes.propTypes = {
//  userInfo: React.PropTypes.object.isRequired,
//  notes: React.PropTypes.object.isRequired
//}

module.exports = Messages;