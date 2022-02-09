import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CreditCardDisplay from 'react-native-credit-card-display';
export const CardList = params => {
  return (
    <View style={{maxHeight: 320, marginTop: 8}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" horizontal={true}>
        <View style={styles.cardStyle}>
          <CreditCardDisplay
            height={220}
            width={370}
            number={4242424242424242}
            cvc={123}
            expiration="04/21"
            name="Chandramauli Shastri"
            since="2004"
          />
        </View>
        <View style={styles.cardStyle}>
          <CreditCardDisplay
            height={220}
            width={370}
            number={4242424242424242}
            cvc={123}
            expiration="04/21"
            name="Heck Codes"
            since="2004"
          />
        </View>
        <View style={styles.cardStyle}>
          <CreditCardDisplay
            height={220}
            width={370}
            number={4242424242424242}
            cvc={123}
            expiration="04/21"
            name="Keshav"
            since="2004"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginLeft: 12,
  },
});
