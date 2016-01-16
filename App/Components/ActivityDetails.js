/**
 * Created by devin on 1/14/16.
 */
var React = require('react-native');
var Separator = require('./Helpers/Separator');
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
    marginTop: 80,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 30
  },
  rowInfoTitle: {
    color: '#7A7A7A',
    fontSize: 23
  },
  rowInfo: {
    fontSize: 19,
    paddingBottom: 2
  },
  rowContent: {
    flex: 2,
    paddingRight: 15,
    paddingLeft: 15
  },
  image: {
    height: 190,
    width: 190,
    borderRadius: 95,
    alignSelf: 'center'
  }
});


class ActivityDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {photo, name, address, notes, rating, url} = this.props.activity.activity;

    return (
        <View style={styles.container} >
          <View>
            <Image source={{uri: photo}} style={styles.image}/>
          </View>
          <ScrollView >
          <View style={styles.rowContent}>
            <Text style={styles.rowTitle}> {name} </Text>
            <Separator />
            <Text style={styles.rowInfoTitle}> Address </Text>
            <Text style={styles.rowInfo}> {address} </Text>
            <Separator />
            <Text style={styles.rowInfoTitle}> Notes </Text>
            <Text style={styles.rowInfo}> {notes} </Text>
            <Separator />
            <Text style={styles.rowInfoTitle}> Rating </Text>
            <Text style={styles.rowInfo}> {rating} </Text>
            <Separator />
            <Text style={styles.rowInfoTitle}> Website </Text>
            <Text style={styles.rowInfo}> {url} </Text>
            <Separator />
          </View>
          </ScrollView>
        </View>

    )
  }
}

module.exports = ActivityDetails;