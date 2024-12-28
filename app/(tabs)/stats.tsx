import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Platform } from 'react-native';

import HomeHeader from '@/components/HomeHeader';
import React from 'react';

export default function StatsScreen() {
  return (
    <>
      <HomeHeader />
      <View style = {styles.box}>
        <Text style = {styles.textColor}>
          Hello, World!
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 50, 
    width: 50, 
    backgroundColor: 'green'
  },
  textColor: {
    color: 'white'
  }
});
