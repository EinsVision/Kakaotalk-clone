import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements'

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://cdn.freebiesupply.com/logos/large/2x/kakaotalk-logo-png-transparent.png',
        }}
        style={{width: 200, height: 200}}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
