import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken(
	'Upk.eyJ1IjoiYWRpdHlhMjAwMCIsImEiOiJjamxkcnMzdDgwZGFiM3Byb3p3dzN5bmN4In0.VXYqWSeRUDiab64DxZu_iQ'
);
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
