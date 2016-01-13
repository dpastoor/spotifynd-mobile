/**
 * Created by devin on 1/12/16.
 */
var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
  // if no styles are set it will just render an empty page
  render() {
    return (
      <View style={styles.container} >
        <Text> This is the dashboard</Text>
      </View>
    )
  }
}

module.exports = Dashboard;