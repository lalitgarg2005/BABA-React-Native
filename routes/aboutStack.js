import { createStackNavigator} from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
    About:{
        screen: About,
        navigationOptions: ({ navigation }) =>{
            return{
                headerTitle: () => <Header navigation={navigation} title='About BABA' />
            }
        }
    }
}
const AboutStack = createStackNavigator(screens,{
    navigationOptions:{
        headerTintColor: '#444',
        headerStyle:{
            backgroundColor: 'pink',
            height: 60 
        }
    }
})
export default AboutStack;//createAppContainer(HomeStack)