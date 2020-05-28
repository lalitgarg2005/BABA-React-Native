import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {globalStyles} from '../styles/globalStyles'

export default function ReviewDetails({ navigation }){
    const gotoHome = () =>{
        navigation.goBack()
    }
    return(
        <View style={globalStyles.container}>
            <Text> {navigation.getParam('name') }</Text>
            <Text> {navigation.getParam('age') }</Text>
            <Text> {navigation.getParam('city') }</Text>

            <Button title='Back to Home' onPress={gotoHome}/>
        </View>
    )
}



