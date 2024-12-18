import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, TouchableOpacity, ColorSchemeName } from 'react-native';
import { PlanItem } from '@/interfaces';

interface PlanItemProps {
  planItem: PlanItem;
  colorScheme: ColorSchemeName;
  index: number;
}

const PlanItemContent: React.FC<PlanItemProps> = ({ planItem, colorScheme, index }) => {
  const {height, width} = useWindowDimensions();
  
  const styles = StyleSheet.create({
    content: {
      backgroundColor: colorScheme == "dark" ? 'rgb(40, 40, 40)' : 'white',
      borderRadius: 15,
      width: width / 1.1,
      height: height / 9,
      justifyContent: 'center',
      marginTop: 20
    },
    textContent: {
      marginLeft: 20,
      color: colorScheme == 'dark' ? 'white' : 'black',
      fontSize: 16
    }
  });

  return (
    <View style = {styles.content} key = {index}>
      <Text style = {[styles.textContent, {fontWeight: 'bold'}]}>{planItem.name}</Text>
      <Text style = {styles.textContent}>{`${planItem.calories} Cal`}</Text>
    </View>
  );
}

export default PlanItemContent;