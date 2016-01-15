/**
 * Created by devin on 1/14/16.
 */
var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight
  } = React;

// if no styles are set it will just render an empty page
var styles = StyleSheet.create({
  container: {
    flex: 1
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
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 100,
    alignSelf: 'center'
  }
});


class ActivityDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {photo, name, address, notes, rating} = this.props.activity.activity;
    console.log(this.props.activity)

    return (
        <View style={styles.container} >
          <Image source={{uri: photo}} style={styles.image}/>
          <ScrollView >
          <View style={styles.rowContent}>
            <Text style={styles.rowTitle}> {name} </Text>
            <Text> Address - {address} </Text>
            <Text> Notes - {notes} </Text>
            <Text> Rating - {rating} </Text>
          </View>
          </ScrollView>
        </View>

    )
  }
}

module.exports = ActivityDetails;