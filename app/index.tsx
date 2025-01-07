import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, useWindowDimensions, useColorScheme, SafeAreaView } from 'react-native';

import HeaderBackground from '@/components/HeaderBackground';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { router } from 'expo-router';

export default function Login() {
  const colorScheme = useColorScheme() ?? "light";
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    parent: {
      backgroundColor: Colors[colorScheme].background,
      flex: 1,
      alignItems: 'center'
    },
    textColor: {
      color: Colors[colorScheme].text
    },
    heading: {
      color: Colors[colorScheme].text,
      fontSize: 30,
      fontWeight: 700,
      marginTop: 50
    },
    input: {
      backgroundColor: Colors[colorScheme].itemHighlight,
      borderRadius: 10,
      borderWidth: .1,
      borderColor: "#a6a6a6",
      width: width / 1.3,
      height: height / 21,
      color: "gray",
      paddingLeft: 10
    },
    inputTitle: {
      color: Colors[colorScheme].text,
      fontFamily: 'Helvetica',
      margin: 5,
      marginTop: 15,
      fontWeight: 'bold'
    },
    button: {
      width: width / 1.3,
      height: height / 21,
      borderRadius: 10,
      backgroundColor: "#840000",
      fontFamily: "System",
      color: "white",
      fontWeight: 600,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20
    },
    googleButton: {
      width: width / 1.3,
      height: height / 21,
      backgroundColor: Colors[colorScheme].itemHighlight,
      justifyContent: "center"
    },
    googleText: {
      fontFamily: "System",
      color: Colors[colorScheme].text,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    image: {
      width: 25,
      height: 25,
      marginLeft: 20
    }
  });

  const signInWithGoogle = async () => {
    router.replace("/(tabs)")
  }

  return (
    <>
      <HeaderBackground>
        <SafeAreaView style = {{justifyContent: 'center', height: height / 10}}>
          <Text style = {{fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>
            Welcome
          </Text>
        </SafeAreaView>
      </HeaderBackground>

      <View style = {styles.parent}>
        <Text style = {styles.heading}>
          Login
        </Text>
        <View>
          <Text style = {styles.inputTitle}>
            Username
          </Text>
          <TextInput style = {styles.input} placeholder="Type your username"></TextInput>
          <Text style = {styles.inputTitle}>
            Password
          </Text>
          <TextInput style = {styles.input} placeholder="Type your password"></TextInput>
        </View>
        <TouchableOpacity style = {styles.button}>
          <Text style = {{color: "white", fontWeight: 'bold'}}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style = {[styles.textColor, {fontWeight: 'bold', fontSize: 17, marginVertical: 10}]}>
          or
        </Text>
        <TouchableOpacity style = {styles.googleButton} onPress = {signInWithGoogle}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style = {styles.image}
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"}
            />
            <View style = {{width: width / 10}} />
            <Text style = {styles.googleText}>
              Sign in with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}