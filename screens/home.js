import React, {useState} from 'react'
import {StyleSheet, View, Text,FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/globalStyles'
export default function Home({ navigation }){
    const[driver, setDriver] = useState([
        {name: 'Deba', age: 35, city: 'Jrb', key:1},
        {name: 'Daya', age: 42, city: 'Ddk', key:2},
        {name: 'Swadhin', age: 28, city: 'Kotna', key:3}
    ]);
    const pressHandler = () =>{
        navigation.push('ReviewDetails')
    }
    return(
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.title}> Home Screen</Text>
            <Button title='Go to Review Details' onPress={pressHandler}/>
        */}
        <FlatList 
            data={driver}
            renderItem={ ({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.title}> { item.name }</Text>
                </TouchableOpacity>
            )}
        />

        </View> 
    )
}

