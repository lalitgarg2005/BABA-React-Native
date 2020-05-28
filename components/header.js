import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Header(){
    return(
        <View style={styles.header}>
         <Text style={styles.title}> BABA </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        height: 50,
        paddingTop: 10,
        backgroundColor: 'coral'
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})