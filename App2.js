import React, { Component } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiYWRpdHlhMjAwMCIsImEiOiJjamxkcnMzdDgwZGFiM3Byb3p3dzN5bmN4In0.VXYqWSeRUDiab64DxZu_iQ');

const IS_ANDROID = Platform.OS === 'android';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isFetchingAndroidPermission: IS_ANDROID,
      isAndroidPermissionGranted: false
    };
  }

  async componentWillMount() {
    if (IS_ANDROID) {
      const isGranted = await Mapbox.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.container}
          ref={map => (this.map = map)}
          compassEnabled={true}
          showUserLocation={true}
          userTrackingMode={Mapbox.UserTrackingModes.followWithHeading}
          styleURL={Mapbox.StyleURL.Dark}
          zoomLevel={15}
          centerCoordinate={[11.256, 43.77]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
