import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {HomePage} from './src/view/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.mainBody}>
      <StatusBar barStyle={'light-content'} backgroundColor="#6200ee" />
      <HomePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
