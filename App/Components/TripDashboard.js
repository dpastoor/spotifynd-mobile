var React = require('react-native');
var ActivityList = require('./ActivitiesList');
var Messages = require('./Messages');
var Firebase = require('firebase');
var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TabBarIOS
  } = React;

// if no styles are set it will just render an empty page
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
  }
});

class TripDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'activities',
      messages: [],
      activities: []
    }

    var myFirebaseRef = new Firebase('https://spotyfind.firebaseio.com/-K81Dja_qE5iLwjtJ16e')
    this.itemsRef = myFirebaseRef.child('messages')

  }
  componentDidMount() {
    // When a todo is added
    this.itemsRef.on('child_added', (dataSnapshot) => {
      console.log('dataSnapshot in child_added: ')
      console.log(dataSnapshot.val().message)
      this.setState({
        messages: this.state.messages.concat(dataSnapshot.val())
      })
    });

  }

  setTab(tabId) {
    this.setState({
      selectedTab: tabId
    })
  }
  handleMessageSubmit(message) {
    let newMessage = {
      message: message,
      user: 'Devin'
    }
    this.itemsRef.push(newMessage)
  }
  componentWillUnmount() {
    console.log('unmounting component');
    this.itemsRef.off();
  }
  render() {

    console.log('firebaseref');
    console.log(JSON.stringify(this.state.messages))
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Itinerary"
          selected={this.state.selectedTab === 'activities'}
          onPress={() => this.setTab('activities')}
        >
          <View>
            <ActivityList activities={[]} />
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Messages"
          selected={this.state.selectedTab === 'messages'}
          onPress={() => this.setTab('messages')}
        >
          <View style={styles.container}>
            <Messages messages={this.state.messages} handleSubmit={this.handleMessageSubmit.bind(this)} />
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = TripDashboard;
