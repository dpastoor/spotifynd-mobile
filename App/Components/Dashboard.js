/**
 * Created by devin on 1/12/16.
 */
var React = require('react-native');
var Separator = require('./Helpers/Separator');
var Trip = require('./Trip');
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
  render() {
    let images = this.props.allTrips.reduce((acc, trip, i) => {
      if (!trip.destination[0]) {
        return acc
      } else {
        return acc.concat(
          (
          <View key={i}>
            {/* this feels like a SUPER hacky way to navigate
             but for speed will give nested navigator to components in current
             implementation
             TODO: properly implement navigation
             */}
            <Trip tripData={trip} navigator={this.props.navigator} />
            <Separator />
          </View>
          )
        );
      }

    }, []);
    
    return (
        <ScrollView style={styles.container} >
          {images}
        </ScrollView>
    )
  }
}

module.exports = Dashboard;