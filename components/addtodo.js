import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';

export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={{paddingTop: 20}}>
        <ScrollView>
            <TextInput 
                style={styles.input}
                placeholderTextColor= '#000'
                placeholder='New task ...'
                onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title='Add Task' color='#003d66'/>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: '#000'
    }
})