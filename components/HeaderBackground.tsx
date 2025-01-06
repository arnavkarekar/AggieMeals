import React, { ReactNode } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Maroon, BrightMaroon } from '@/constants/Colors';

interface HeaderBackgroundProps {
  children: ReactNode
}

const HeaderBackground: React.FC<HeaderBackgroundProps> = ({ children }) => {
  const {width, height} = useWindowDimensions();
    
  const styles = StyleSheet.create({
    header: {
      width: width,
      height: height / 8,
      backgroundColor: Maroon
    },
  });

  return (
    <LinearGradient
      colors={[Maroon, BrightMaroon]}
      style = {styles.header}
    >
      {children}
    </LinearGradient>
  )
}

export default HeaderBackground;