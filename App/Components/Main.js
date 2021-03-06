/**
 * Created by devin on 1/12/16.
 */
var React = require('react-native');
var config = require('../config');
var api = require('../Utils/api');
var Dashboard = require('./Dashboard');
var TripDashboard = require('./TripDashboard');
var {
  View,
  Text,
  StyleSheet,
  TextInput, // text input
  TouchableHighlight, //capture touch event and do something with it
  ActivityIndicatorIOS // show a spinner based on a boolean
  } = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      roomId: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      roomId: event.nativeEvent.text
    });
  }

  handleSubmit(event) {
    this.setState({
      isLoading: true
    });
    //api.getAllTrips()
    //  .then((res) => {
    //    console.log('all trips: ');
    //    console.log(res);
        // can navigate around from the NavigatorIOS component we set up in index.ios.js
        this.props.navigator.push({
          title: 'Trip',
          component: TripDashboard,
          passProps: {roomId: this.state.roomId}
        });
        this.setState({
          isLoading: false,
          error: false,
          roomId: ''
        });
    //});
  }
  showPossibleTrips(event) {
    // underlayColor --> any time press on button background goes white
    // eventually will fetch data from 4square
    //reroute to next passing in information
    // for now will just fake
    this.setState({
      isLoading: true
    });
    //directly hitting the 4square api
    //fetch('https://api.foursquare.com/v2/venues/explore?client_id='+
    //  config.API+
    //  '&client_secret='+config.SECRET+'&v=20130815&near='+this.state.roomId+'&venuePhotos=1')
    api.getAllTrips()
      .then((res) => {
        // can navigate around from the NavigatorIOS component we set up in index.ios.js
        this.props.navigator.push({
          title: 'Trips',
          component: Dashboard,
          passProps: {allTrips: res}
        });
        this.setState({
          isLoading: false,
          error: false,
          roomId: ''
        });
      });
  }
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Join to a Room </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.roomId}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}> Join! </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.showPossibleTrips.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}> Show Public TripLists </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"
        />
      </View>
    )
  }
}

module.exports = Main;