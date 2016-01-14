var React = require('react-native');
var ActivitiesList = require('./ActivitiesList');
var api = require('../Utils/api');
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


class Trip extends React.Component{
  // if no styles are set it will just render an empty page

  handleSubmit(trip) {
    api.getActivities(trip)
    .then((res) => {
      this.props.navigator.push({
        title: res.name,
        component: ActivitiesList,
        passProps: {activities: res.list}
      });
    })
  }

  render() {
    let {_id, image, name, destination} = this.props.tripData;
    return (
      <TouchableHighlight
        onPress={this.handleSubmit.bind(this, _id)}
        underlayColor="white"
      >
        <View style={styles.container}>
          <View style={styles.rowContent}>
            <Text style={styles.rowTitle}> {name} </Text>
            <Text> {destination[0] + ', ' + destination[1] } </Text>
          </View>
          <Image source={{uri: image}} style={styles.image}/>
        </View>
      </TouchableHighlight>

    )
  }
}

module.exports = Trip;
