import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, TouchableOpacity, ColorSchemeName } from 'react-native';
import { PlanSection } from '@/interfaces';
import PlanItemContent from './PlanItemContent';

interface PlanSectionProps {
  section: PlanSection;
  colorScheme: ColorSchemeName;
}

const PlanSectionContent: React.FC<PlanSectionProps> = ({ section, colorScheme }) => {
  const {height, width} = useWindowDimensions();
  
  const styles = StyleSheet.create({
    headerText: {
      textAlign: 'center',
      color: colorScheme == "dark" ? "white" : "black",
      fontFamily: 'Helvetica',
      fontSize: 27,
      fontWeight: 'bold',
      marginTop: section.heading == "Breakfast" ? 20 : 10
    },
    horizontalLine: {
      borderColor: colorScheme == "dark" ? "white" : 'black',
      borderWidth: 1,
      width: width / 4,
    },
  });

  return (
    <View style = {{alignItems: 'center'}}>
      <View style = {{width: width, height: 10}}></View>

      <View style = {{width: width / 1.1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style = {styles.headerText}>
          {section.heading.toUpperCase()}
        </Text>
      </View>

      {section.options.map((planItem, index) => (
        <PlanItemContent planItem = {planItem} colorScheme = {colorScheme} index = {index} />
      ))}

      <View style = {{width: width, height: 10}}></View>
    </View>

  );
}

export default PlanSectionContent;