import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home';
import AddTodoScreen from './src/addTodoScreen'
import { TodoProvider } from './src/TodoContext';

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
