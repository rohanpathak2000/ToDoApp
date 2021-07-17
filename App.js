import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItem';
import AddToDo from './components/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'get stationary', key:'1'},
    { text: 'buy snacks', key:'2'},
    { text: 'create an app', key:'3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
      setTodos((prevTodos) => {
          return [
            {text: text, key: Math.random().toString()},
            ...prevTodos
          ];
      
  })
}
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}> 
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
            )} 
            />
        </View>
        <AddToDo submitHandler={submitHandler}/>
      </View>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
})