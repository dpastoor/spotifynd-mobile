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

class Activity extends React.Component{
  // if no styles are set it will just render an empty page
  constructor(props) {
    super(props);
  }
  render() {
    let {photo, name, address, notes, rating} = this.props.activityData;

    return (
      <View style={styles.container}>
        <View style={styles.rowContent}>
          <Text style={styles.rowTitle}> {name} </Text>
          <Text> {address} </Text>
        </View>
        <Image source={{uri: photo}} style={styles.image}/>
      </View>

    )
  }
}

module.exports = Activity;

