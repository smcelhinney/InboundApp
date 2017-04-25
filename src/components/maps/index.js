/* eslint no-console: 0 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: '500'
  }
});

export default class GeolocationExample extends Component {
  static navigationOptions = {
    tabBarLabel: 'Maps'
  }

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown'
    };
    this.watchID = null;
  }

  getGeoLocation() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, (error) => {
        reject('ERROR: ' + error.code + ': ' + error.message);
      }, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      });
    });
  };

  async _getPosition() {
    this.setState({loading: true});
    try {
      const geoLocation = await this.getGeoLocation();
      this.setState({initialPosition: geoLocation, loading: false});
    } catch (e) {
      console.error(e);
      this.setState({loading: false});
    }
  }

  componentDidMount() {
    this._getPosition();
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const lastPosition = position;
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  showPos(obj) {
    return (
      <Text>{JSON.stringify(obj)}</Text>
    );
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position:
          </Text>
          {this.showPos(this.state.initialPosition)}
        </Text>
        <Text>
          <Text style={styles.title}>Current position:
          </Text>
          {this.showPos(this.state.lastPosition)}
        </Text>
      </View>
    );
  }
}
