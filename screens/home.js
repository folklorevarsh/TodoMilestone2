import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Header from '../components/header';
/*import TodoItem from '../components/todoItem';*/
import AddTodo from '../components/addTodo';
import TodoItem from '../components/todoItem';

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    { text: 'Adopt a cat!', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  /*const submitHandler = (text) => {
    if(text.length > 3){
      setText('');
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  */

  /*return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
          <Button 
            title="Add Todo" 
            onPress={() => navigation.navigate('AddTodo')} 
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
*/
const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7C3E4', // change the background color to a dark color
    borderWidth: 5, // add a border
    borderColor: '#B6428A', // set the border color
  },
  content: {
    padding: 50,
  },
});

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { padding: 20 }]}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button 
              title="Add Todo" 
              onPress={() => navigation.navigate('AddTodo', { setTodos })} 
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );


}