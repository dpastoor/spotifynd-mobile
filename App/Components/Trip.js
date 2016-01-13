var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
  } = React;

var styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flexDirection: 'row'
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  text: {
   flex: 2,
    paddingTop: 20,
    alignSelf: 'flex-start'
  },
  image: {
    flex: 1,
    height: 100,
    marginTop: 10,
    alignSelf: 'flex-end'
  }

});

class Trip extends React.Component{
  // if no styles are set it will just render an empty page
  render() {
    let {image, name, destination} = this.props.tripData;
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {name} at {destination[0] + ', ' + destination[1] } </Text>
        <Image source={{uri: image}} style={styles.image}/>
      </View>

    )
  }
}

module.exports = Trip;
