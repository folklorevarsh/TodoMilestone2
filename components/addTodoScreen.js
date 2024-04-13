/*import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity} from 'react-native';
*/

/*
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
      <Button onPress={addTodo} title='Hello' color='#E572BA' />
      <View style={{ marginBottom: 8 }}></View>
      <Button onPress={goBackToHome} title='Back Home' color='red' style={{ height: 30, width: 40 }} />
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


  const [todos, setTodos] = useState([]);
*/

import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, FlatList, StyleSheet, ToastAndroid } from 'react-native';
import { TodoContext } from './components/TodoContext';


export default function AddTodoScreen(navigation) {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todos, setTodos] = useState([]);
  
  const [editTodoId, setEditTodoId] = useState(null);
  const [isExpandedMode, setIsExpandedMode] = useState(true);


  const addTodo = () => {
    if (todoTitle.trim() === '' || todoDescription.trim() === ''|| todoTitle.trim().length < 5 || todoDescription.trim().length < 5) {
      // Don't add the todo if the title or description is empty
      Alert.alert('Oops..', 'Your ToDo Title and Description must be over 5 characters long.', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
      return;
    }
    if (editTodoId) {
      setTodos((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === editTodoId ? { id: todo.id, title: todoTitle, description: todoDescription } : todo, 
        )
      );
      setEditTodoId(null);
    } else {
      setTodos((currentTodos) => [
        ...currentTodos,
        { id: Math.random().toString(), title: todoTitle, description: todoDescription },
      ]);
    }
    setTodoTitle('');
    setTodoDescription('');

    Alert.alert('Success', 'To Do successfully added!');
  };

  const deleteTodo = (todoId) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (todoId) => {
    setEditTodoId(todoId);
    const todoToEdit = todos.find((todo) => todo.id === todoId);
    if (todoToEdit) {
      setTodoTitle(todoToEdit.title);
      setTodoDescription(todoToEdit.description);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todoTitle}
        onChangeText={setTodoTitle}
        placeholder="Enter To Do title"
      />
      <TextInput
        style={styles.input}
        value={todoDescription}
        onChangeText={setTodoDescription}
        placeholder="Enter To Do description"
        multiline
        numberOfLines={4}
      />
      <Button title={editTodoId ? 'Save Changes' : 'Add Todo'} onPress={addTodo} color='#E996BA' />
      <View style={{ padding: 10, flex: 1 }} />
      <Button title={isExpandedMode ? 'Switch to Concise Mode ⬇' : 'Switch to Expanded Mode ⬆'} onPress={() => setIsExpandedMode(!isExpandedMode)} color="#E572BA" />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.title}</Text>
            {isExpandedMode && <Text>{item.description}</Text>}
            {isExpandedMode && (
              <View style={styles.controlPanel}>
                <Button title="Delete ❌" onPress={() => deleteTodo(item.id)} color='#981400' />
                <Button title="Edit ✏️" onPress={() => editTodo(item.id)} color='#E572BA' />
                <Button title="Finish ✅" onPress={() => deleteTodo(item.id)} color= 'green' />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 8,
  },
  todoItem: {
    padding: 15,
    marginTop: 15,
    borderColor: 'pink',
    borderWidth: 5,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

