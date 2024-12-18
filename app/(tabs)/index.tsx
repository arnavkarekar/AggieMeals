import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, FlatList, useWindowDimensions, TouchableOpacity, useColorScheme } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { Colors } from '@/constants/Colors';
import { PlanSection } from '@/interfaces';
import PlanSectionContent from '@/components/PlanSectionContent';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const {width, height} = useWindowDimensions();

  const planData: PlanSection[] = [
    {
      heading: "Breakfast", 
      options: [{name: "Option 1", calories: 230}, {name: "Option 2", calories: 230}]
    },
    {
      heading: "Lunch", 
      options: [{name: "Option 1", calories: 230}, {name: "Option 2", calories: 230}]
    },
    {
      heading: "Dinner", 
      options: [{name: "Option 1", calories: 230}, {name: "Option 2", calories: 230}]
    }
  ]

  const styles = StyleSheet.create({
    homeContent: {
      flex: 6, 
      backgroundColor: colorScheme == "dark" ? Colors.dark.background : Colors.light.background,
    }
  });

  return (
    <>
      <HomeHeader />
      <View style = {styles.homeContent}>
        <FlatList
          data = {planData}
          keyExtractor = {(_, index) => String(index)}
          renderItem={({ item }) => (
            <PlanSectionContent section = {item} colorScheme = {colorScheme} />
          )}
        />
      </View>
    </>
  );
}
