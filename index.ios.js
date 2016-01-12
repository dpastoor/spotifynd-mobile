var React = require('react-native');
var Main = require('./App/Components/Main');


var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
  } = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class TestReactNative extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Spotifynd',
          component: Main
        }} />
    );
  }
};

// this component needs to match the name of the .xcodeproj
AppRegistry.registerComponent('TestReactNative', () => TestReactNative);