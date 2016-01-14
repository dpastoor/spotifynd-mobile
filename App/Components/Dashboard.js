/**
 * Created by devin on 1/12/16.
 */
var React = require('react-native');
var Separator = require('./Helpers/Separator');
var Trip = require('./Trip');
var ActivitiesList = require('./ActivitiesList');
var api = require('../Utils/api');
var {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight // wrapper to make views respond properly to touches
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
   height: 200
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
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
    let trips = this.props.allTrips.reduce((acc, trip, i) => {
      if (!trip.destination[0]) {
        return acc
      } else {
        return acc.concat(
          (
          <TouchableHighlight
            onPress={this.handleSubmit.bind(this, trip._id)}
            underlayColor="white"
            key={i}
          >
            <View >
              <Trip tripData={trip} />
              <Separator />
            </View>
          </TouchableHighlight>
          )
        );
      }

    }, []);

    return (
        <ScrollView style={styles.container} >
          {trips}
        </ScrollView>
    )
  }
}

module.exports = Dashboard;