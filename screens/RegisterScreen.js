import React from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'

const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light'/>
      <Text h3 style={{ marginBottom:50 }}>
        Create a Kakaotalk account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder='Full name'
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{

  },
  inputContainer: {

  },
});
