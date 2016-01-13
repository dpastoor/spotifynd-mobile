/**
 * Created by devin on 1/12/16.
 */
var React = require('react-native');
var config = require('../config');
var api = require('../Utils/api');
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
      cityState: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      cityState: event.nativeEvent.text
    });
  }

  handleSubmit(event) {
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
    //  '&client_secret='+config.SECRET+'&v=20130815&near='+this.state.cityState+'&venuePhotos=1')
    api.getAllTrips()
      .then(function(res) {
        console.log('result from /trips')
        console.log(res)
    })
  }
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Place </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.cityState}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}> SEARCH</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Main;