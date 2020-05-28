import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function DriverList({ item, deleteDriver }){
    return(
        <View>
            <TouchableOpacity onPress={(item)=> deleteDriver(item.name)}>
            <View  style={styles.list}>
                <Text> { item.name} </Text>
                <MaterialIcons style={styles.listDelete} name='delete' size={20} color='#ddd'/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        marginTop: 24,
        padding: 10,
        backgroundColor: 'pink',
        fontSize: 24,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        flexDirection: 'row',
        justifyContent: "space-between" 
    },
    listDelete:{
        marginRight: 10,

    }
})