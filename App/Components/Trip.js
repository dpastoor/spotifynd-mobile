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
    padding: 10,
    flexDirection: 'row'
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    flex: 2,
    alignSelf: 'flex-start'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    flex: 1,
    height: 100,
    alignSelf: 'flex-end'
  }

});

class Trip extends React.Component{
  // if no styles are set it will just render an empty page
  render() {
    let {image, name, destination} = this.props.tripData;
    return (
      <View style={styles.container}>
        <View style={styles.rowContent}>
          <Text style={styles.rowTitle}> {name} </Text>
          <Text> {destination[0] + ', ' + destination[1] } </Text>
        </View>
        <Image source={{uri: image}} style={styles.image}/>
      </View>

    )
  }
}

module.exports = Trip;
