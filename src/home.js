import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Header from './header';
import AddTodo from './addTodo';
import TodoItem from './todoItem';

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    
  ]);

  const boldText = {
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const boldBox = {
    borderWidth: 5,
    borderColor: '#B6428A',
  };

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

const styles = StyleSheet.create({
    list: {
      marginTop: 25,
    },

    input: {
      marginBottom: 15,
      paddingHorizontal: 6,
      paddingVertical: 6,
      borderBottomWidth: 3,
      borderBottomColor: '#E572BA',
      },

    container: {
      flex: 1,
      backgroundColor: '#F7C3E4',
      borderWidth: 5,
      borderColor: '#B6428A',
    },
    content: {
      padding: 50,
    },
    text: {
      color: 'black', // add this line to make the text black
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
              title="Add To Do" 
              onPress={() => navigation.navigate('AddTodo', { setTodos })} 
              color='#E572BA'
              style={{ height: 50, width: 200 }} // Add this style to make the button bigger
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );


}