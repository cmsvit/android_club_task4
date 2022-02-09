import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {AppBar} from '../components/AppBar';
import {
  ActivityIndicator,
  Caption,
  Divider,
  Headline,
} from 'react-native-paper';
import {HistoryList} from '../components/HistoryList';
import {Dimensions} from 'react-native';
import {CardList} from '../components/CardList';
const windowHeight = Dimensions.get('window').height;
export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  return (
    <View style={{height: windowHeight}}>
      <AppBar />
      <Headline style={{padding: 16}}>Your cards</Headline>
      <Divider />
      <CardList />
      <Headline style={{padding: 16}}>Transaction History</Headline>
      <Divider />
      <HistoryList isLoading={isLoading} />
    </View>
  );
};
