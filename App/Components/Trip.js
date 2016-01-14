var React = require('react-native');
var api = require('../Utils/api');
var {
  Text,
  View,
  StyleSheet,
  Image
  } = React;

var styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row'
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 25
  },
  rowContent: {
    flex: 2,
    alignSelf: 'flex-start'
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
    let {_id, image, name, destination} = this.props.tripData;
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
