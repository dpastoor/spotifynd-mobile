/**
 * Created by devin on 1/12/16.
 */
var api = {
  getAllTrips() {
    var url =  'http://localhost:8080/trips';
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;