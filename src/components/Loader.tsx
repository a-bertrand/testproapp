import React from 'react';
import { View } from 'react-native'
import { StyleSheet, ActivityIndicator } from 'react-native';

export default class Loader extends React.Component<any>{
    render() {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#ff0000" />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 });