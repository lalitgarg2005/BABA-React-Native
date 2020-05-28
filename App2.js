import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from './components/header'
import DriverList from './components/driverList'
import AddDriver from './components/addDriver'
export default function App() {
 
  const [driver, setDriver] = useState([
    {name: 'Daya', id: 1},
    {name: 'Swadhin', id: 2},
    {name: 'Ganesh', id: 3},
    {name: 'Sunil', id: 4}
  ])

  const deleteDriver = (id) => {
    setDriver(prevDrivers =>{
      return(
        prevDrivers.filter(driv => driv.id != id)
      )
    })
  }

  const addNewDriver = (driverName) => {
    if(driverName.length >3){
      setDriver((prevDrivers) => {
        return[
          {name: driverName, key: Math.random().toString()},
          ...prevDrivers
        ]
      })
    }else{
      Alert.alert('OOPS!', 'Driver name should be over 3 char long',[
        {text: 'Understood', onPress: () => console.log('alert Closed')}
      ])
    }
  
  }
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss()
      console.log('Keyboard dismissed')
    }}>
      <View style={styles.container}>
      <Header/>
      <AddDriver addNewDriver={addNewDriver}/>
      <FlatList 
        keyExtractor = {driver => driver.id}
        data={driver}
        renderItem = { ({ item }) =>(
          <DriverList item={item} deleteDriver={deleteDriver}/>
        )}
      />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingHorizontal: 20
  },
  list: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  },
  listItem: {
    color: 'black',
    fontSize: 24
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: '20'
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'blue',
    padding: '20'
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
