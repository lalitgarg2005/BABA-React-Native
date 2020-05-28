import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App1() {
  // const [name,setName] = useState('Lalit')
  // const [age, setAge] = useState(0)
  // const [person, setPerson] = useState({name: 'Pawan', age: 35})
  const [city, setCity] = useState([
    {name: 'Raipur', key: '1'},
    {name: 'Sambalpur', key: '2'},
    {name: 'Nagpur', key: '3'},
    {name: 'Cuttack', key: '4'},
    {name: 'Patna', key: '5'},
    {name: 'Ranchi', key: '6'}
  ])
  const [owner, setOwner] = useState([
    {name: 'Lalit', id: '1'},
    {name: 'Pawan', id: '2'},
    {name: 'Deepak', id: '3'},
    {name: 'Ankur', id: '4'}
  ])
  const clickHandler = () => {
    setName('Kumar G')
    setPerson({name: 'Bhai', age: 45})
  }

  const pressHandler = (id) => {
    console.log(id)
    setOwner((prevOwner) => {
      return(
        prevOwner.filter(owner => owner.id != id)
      )
    })
  }
  return (
    <View style={styles.container}>
    <FlatList 
      numColumns={2}
      keyExtractor={item => item.id}
      data={city}
      renderItem={( { item })=> (
        <TouchableOpacity onPress={ () => pressHandler(item.id)}>
          <Text style={styles.listItem}> {item.name} </Text>
        </TouchableOpacity>
      )} 
    />

  {/*   <ScrollView>
    {city.map(item => (
        <View key={item.key}>
          <Text style={styles.listItem}> {item.name} </Text>
        </View>
      )
    )}
    </ScrollView>
        <View style={styles.header}>
          <Text style={styles.boldText}> BABA </Text>
        </View>
        <View>
          <Text> Enter Name:</Text>
          <TextInput
            style={styles.input}
            placeholder='e.g. Lalit Garg'
            onChangeText={(val) => setName(val)}
          />

           <Text> Enter Age:</Text>
          <TextInput
          keyboardType='numeric'
            style={styles.input}
            placeholder='e.g. 99'
            onChangeText={(val) => setAge(val)}
          />
        </View>
        <View style={styles.body}>
          <Text>Welcome {name}, Your Age is {age}</Text>
          <Text>My name is {name}</Text>
          <Text>Brother name is {person.name} and Age is {person.age} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Change Name' onPress={clickHandler} />
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingHorizontal: 20
  },
  listItem: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
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
