/*import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import AddTodoScreen from './screens/addTodoScreen'; */


/*
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import AddTodoScreen from './components/addTodoScreen'
import { TodoProvider } from './components/TodoContext';


const Stack = createStackNavigator();

export default function App() {
    const [todos, setTodos] = useState([
      { text: 'Adopt a cat!', key: '1' },
      { text: 'Finish Javascript Assignment', key: '2' },
      { text: 'Buy groceries on the way home', key: '3' },
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
};

export default App;
*/


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import AddTodoScreen from './components/addTodoScreen'
import { TodoProvider } from './components/TodoContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddTodo" component={AddTodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};
