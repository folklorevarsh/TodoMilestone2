import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Add a New Todo'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='#E572BA' onPress={() => submitHandler(text)} title='Add a New Todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderBottomWidth: 3,
    borderBottomColor: '#E572BA',
  },
});