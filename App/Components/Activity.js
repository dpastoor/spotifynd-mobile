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
    this.state = {
      expanded: false
    }
  }
  render() {
    let {photo, name, address, notes, rating} = this.props.activityData;
    let additionalInfo = this.state.expanded ? (
      <Text> {notes} </Text>
    ) : <Text> {''}</Text>;
    return (
      <View style={styles.container}>
        <View style={styles.rowContent}>
          <Text style={styles.rowTitle}> {name} </Text>
          <Text> {address} </Text>
          {additionalInfo}
        </View>
        <Image source={{uri: photo}} style={styles.image}/>
      </View>

    )
  }
}

module.exports = Activity;
