import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import HeaderBackground from './HeaderBackground';
import { Maroon, BrightMaroon } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function HomeHeader() {
  const {width, height} = useWindowDimensions();
  
  const styles = StyleSheet.create({
    header: {
      width: width,
      height: height / 8,
      backgroundColor: Maroon
    },
    headerContent: {
      width: width,
      flexDirection: 'row',
    }
  });

  return (
    <HeaderBackground>
      <SafeAreaView style = {styles.headerContent}>
        <View style = {{width: width / 5, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Ionicons size={40} name="person-circle-sharp" color={'white'} />
          </TouchableOpacity>
        </View>
        <View style = {{width: 3 * width / 5, alignItems: 'center', justifyContent: 'center'}}>
          <Text style = {{fontSize: 25, color: 'white', fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center'}}>
            Your Plan
          </Text>
        </View>
        <View style = {{width: width / 5, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity>
            <AntDesign size={40} name="filter" color={'white'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </HeaderBackground>
  );
}