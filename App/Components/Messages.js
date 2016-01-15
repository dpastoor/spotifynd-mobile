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
  TouchableHighlight
  } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
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

let fixtures = ["test message 1", "test message 2"];
class Messages extends React.Component{
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.messages),
      note: '',
      error: ''
    }
  }
  handleChange(e){
    this.setState({
      note: e.nativeEvent.text
    })
  }

  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData.user}: </Text>
          <Text> {rowData.message} </Text>
        </View>
        <Separator />
      </View>
    )
  }
  submitMessage(message) {
    this.props.handleSubmit(message)
    this.setState({
      note: ''
    });
  }
  footer(){
    return (
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange.bind(this)}
          placeholder="New Message" />
        <TouchableHighlight
          style={styles.button}
          onPress={this.submitMessage.bind(this, this.state.note)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
  render(){
    console.log(this.state.dataSource)
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        //  renderHeader={() => <Badge userInfo={this.props.userInfo}/>}
        />
        {this.footer()}
      </View>
    )
  }
};

//Notes.propTypes = {
//  userInfo: React.PropTypes.object.isRequired,
//  notes: React.PropTypes.object.isRequired
//}

module.exports = Messages;