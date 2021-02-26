import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {

  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://www.flaticon.com/svg/vstatic/svg/2111/2111496.svg?token=exp=1614322966~hmac=97acafb58b712ebbf60e0ae90fcee320',
        }}
        style={{width: 200, height: 200}}
      />
      <View style={styles.inputContainer}>
        <Input 
          placeholder='Email' 
          autoFocus 
          type='email'
          value={email} 
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder='Password' 
          secureTextEntry 
          type='password' 
          value={password} 
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button 
        containerStyle={styles.button}
        title='Login'
        onPress={signIn} 
      />
      <Button 
        onPress={() => navigation.navigate('Register')}
        containerStyle={styles.button} 
        type='outline' 
        title='Register' 
      />
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  }, 
  button: {
    width: 280,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "#ffeb33",
  },
});
