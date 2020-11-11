import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Plane from './entities/Plane'

export default class My3DProject extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Come Hang in my Hanger!
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#00B0FF',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 80,
  },
});

AppRegistry.registerComponent('My3DProject', () => My3DProject);
AppRegistry.registerComponent('Plane', () => Plane);
