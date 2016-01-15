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
  componentDidUpdate() {
    let innerScrollView = this._scrollView.refs.InnerScrollView;
    let scrollView = this._scrollView.refs.ScrollView;
    requestAnimationFrame(() => {
      innerScrollView.measure((innerScrollViewX, innerScrollViewY, innerScrollViewWidth, innerScrollViewHeight) => {
        scrollView.measure((scrollViewX, scrollViewY, scrollViewWidth, scrollViewHeight) => {
          var scrollTo = innerScrollViewHeight - scrollViewHeight + innerScrollViewY;

          if (innerScrollViewHeight < scrollViewHeight) {
            return;
          }

          this._scrollView.scrollTo(scrollTo);
        });
      });
    });
  }

  submitMessage(message) {
    this.props.handleSubmit(message);
    this.setState({
      note: ''
    });
  }
  handleChange(e){
    this.setState({
      note: e.nativeEvent.text
    })
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
      <View style={styles.container}>
        <ScrollView  ref={component => this._scrollView = component} >
          {allMessages}
        </ScrollView>
        <View style={styles.footerContainer}>
          <TextInput
            style={styles.searchInput}
            value={this.state.note}
            onChange={this.handleChange.bind(this)}
            placeholder="New Message"
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.submitMessage.bind(this, this.state.note)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

// Notes.propTypes = {
//  userInfo: React.PropTypes.object.isRequired,
//  notes: React.PropTypes.object.isRequired
//}

module.exports = Messages;