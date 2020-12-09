
import React from 'react';
import {
   StyleSheet, Text, View ,TextInput,TouchableOpacity
  } from 'react-native';
export default function formRegistertion() {

  return (
    <View style={styles.regForm}>
      <Text style={styles.header}>Registertion</Text>
      <TextInput style={styles.input} placeholder='Enter Full Name' autoFocus />
      <TextInput style={styles.input} placeholder='Enter Email Address'/>
      <TextInput style={styles.input} placeholder='Enter Phone Number' keyboardType='numeric' />
      <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTxt}>sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  regForm:{
    alignSelf:'stretch',
    paddingLeft:40,
    paddingRight:40,
    
    
    
  },
  header:{
    borderBottomColor:'#bf00ff',
    borderBottomWidth:1,
    paddingBottom:10,
    marginBottom:10,
    fontSize:20
  },
  input:{
    padding:30,
    marginBottom:10,
    borderColor:'#bf00ff',
    borderWidth:1

  },
  button:{
    backgroundColor:'#bf00ff',
    alignItems:"center",
    padding:30
  },
  buttonTxt:{
    color:'#fff',
    fontWeight:'bold'
  }

});
