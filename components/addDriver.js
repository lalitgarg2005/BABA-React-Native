import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

export default function AddDriver({addNewDriver}){

    const[text, setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    return(
        <View style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder='New Driver...'
            onChangeText={changeHandler}
        />
        <Button onPress={() => addNewDriver(text)} title='Add New Driver' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})