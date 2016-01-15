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
    this.messagesRef = myFirebaseRef.child('messages');
    this.activitiesRef = myFirebaseRef.child('playlist');

  }
  componentDidMount() {
    this.messagesRef.on('child_added', (dataSnapshot) => {
      this.setState({
        messages: this.state.messages.concat(dataSnapshot.val())
      })
    });
    this.activitiesRef.on('child_added', (dataSnapshot) => {
      this.setState({
        activities: this.state.activities.concat(dataSnapshot.val())
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
    this.messagesRef.push(newMessage)
  }
  componentWillUnmount() {
    this.messagesRef.off();
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Itinerary"
          selected={this.state.selectedTab === 'activities'}
          onPress={() => this.setTab('activities')}
        >
          <View style={styles.container}>
            <ActivityList activities={this.state.activities} />
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
