/*import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import AddTodoScreen from './screens/addTodoScreen'; */


import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import AddTodoScreen from './components/addTodoScreen'

const Stack = createStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Adopt a cat!', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="AddTodo">
          {props => <AddTodoScreen {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}