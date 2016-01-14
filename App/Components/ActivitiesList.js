/**
 * Created by devin on 1/13/16.
 */
var React = require('react-native');
var Activity = require('./Activity');
var Separator = require('./Helpers/Separator');
var {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight
  } = React;

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
    flex: 1,
    height: 100,
    alignSelf: 'flex-end'
  }

});

class ActivitiesList extends React.Component {
  // if no styles are set it will just render an empty page
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.activities);
    let activities = this.props.activities.map((activity, i) => {
      return (
        <View key={i}>
          <Activity activityData={activity} />
          <Separator />
        </View>
      )
    })
    return (
      <ScrollView style={styles.container} >
          {activities}
      </ScrollView>
    )
  }
}

module.exports = ActivitiesList;
