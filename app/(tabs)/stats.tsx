import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Platform } from 'react-native';

import HomeHeader from '@/components/HomeHeader';
import React from 'react';

export default function StatsScreen() {
  return (
    <>
      <HomeHeader />
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
          LOGIN
        </TouchableOpacity>
        <Text>
          or
        </Text>
        <Image>
        </Image>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#ececec',
    flex: 1,
    alignItems: 'center'
  },
  textColor: {
    color: 'black'
  },
  heading: {
    color: "black",
    fontSize: 30,
    fontWeight: 700,
    marginTop: 50
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: .1,
    borderColor: "#a6a6a6",
    width: 300,
    height: 40,
    color: "gray",
    paddingLeft: 10
  },
  inputTitle: {
    margin: 5,
    marginTop: 15
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#840000",
    fontFamily: "System",
    color: "white",
    fontWeight: 600,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  }
});
