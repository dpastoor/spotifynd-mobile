var React = require('react-native');
var ActivityList = require('./ActivitiesList');
var Messages = require('./Messages');
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

});

class TripDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'activities'
    }
  }

  setTab(tabId) {
    this.setState({
      selectedTab: tabId
    })
  }

  render() {
    console.log('connected to trip dashboard')
    console.log('roomId:', this.props.roomId)
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'activities'}
          onPress={() => this.setTab('activities')}
        >
          <View>
            <Text>
                Hello
            </Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab === 'messages'}
          onPress={() => this.setTab('messages')}
        >
          <View>
            <Text>
              Hello
            </Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = TripDashboard;
