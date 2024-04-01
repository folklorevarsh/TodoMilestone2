import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AddTodoScreen({ navigation, setTodos }) {
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.length > 3) {
      setTodos(prevTodos => [
        { text, key: Math.random().toString() },
        ...prevTodos
      ]);
      setText('');
      navigation.goBack();
    } else {
      Alert.alert('A little hiccup!', 'Your ToDo must be over 5 characters long. Please try again', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  const goBackToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        style={[styles.input, { width: '100%', marginBottom: 16, color:'#E572BA' }]}
        placeholder='Enter your To Do!'
        onChangeText={setText}
        value={text}
      />
      <TextInput
        style={[styles.input, { width: '100%',  marginBottom: 16, height: 100 }]}
        placeholder='Enter task description'
        onChangeText={setText}
        value={text}
        multiline={true}
        numberOfLines={4}
      />
      <Button onPress={addTodo} title='Add To Do' color='#E572BA' />
      <View style={{ marginBottom: 8 }}></View>
      <Button onPress={goBackToHome} title='Cancel' color='red' style={{ height: 30, width: 40 }} />
      <View style={{ marginBottom: 8 }}></View>
      <Button title='Save' color='green' style={{ height: 30, width: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,

    button: {
        backgroundColor: 'pink',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 8,
      },
      buttonCancel: {
        backgroundColor: 'red',
      },
      buttonSave: {
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
      },
    }
  });
