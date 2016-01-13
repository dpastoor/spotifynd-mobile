/**
 * Created by devin on 1/12/16.
 */
var React = require('react-native');
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
    marginTop: 65,
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
    let images = this.props.allTrips.map((trip, i) =>  <Image key={i} source={{uri: trip.image}} style={styles.image} />)
    return (
        <ScrollView style={styles.container} >
          {images}
        </ScrollView>
    )
  }
}

module.exports = Dashboard;