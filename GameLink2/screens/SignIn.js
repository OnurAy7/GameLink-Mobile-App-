import { StyleSheet, Button, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignIn({ navigation }) {
  return (
    <View style ={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>
      <Text style={styles.message}>
        Sign in to continue
      </Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          placeholder='Username' 
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style ={styles.signinButton}>
        <Button
          title="Sign In"
          onPress={() => {
            
          }}
          color="#0827F5"
        />
      </View>
      <View style ={styles.accountButton}>
        <Button
          title="Create an account"
          onPress={() => navigation.navigate('SignUp')}
          color="#FF0000"
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  signinButton: {
    marginTop: 20,
    width: '80%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  message: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 30,
  },
  accountButton: {
    marginTop: 5,
    width: '80%',
    borderRadius: 15,
    overflow: 'hidden',
  },
});
