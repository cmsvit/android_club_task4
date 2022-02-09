import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
export const AppBar = params => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Hi, Chandramauli" />
      <Avatar.Icon size={40} icon="account" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 20,
  },
});
