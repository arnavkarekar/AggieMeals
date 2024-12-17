import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, Platform, useWindowDimensions, TouchableOpacity } from 'react-native';
import HomeHeader from '@/components/HomeHeader';

export default function HomeScreen() {
  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    homeContent: {
      flex: 7, 
      backgroundColor: 'white'
    }
  });

  return (
    <>
      <HomeHeader />
      <View style = {styles.homeContent}>
      </View>
    </>
  );
}
