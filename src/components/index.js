import React from 'react'
import {View} from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers/index'
import {createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import DeckList from './deck/DeckList'
import IndividualDeck from './deck/IndividualDeck'

const Tabs = createBottomTabNavigator({
	DeckList: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: 'All Decks'
		}
	}

})


const AppNavigator = createStackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {title: 'Home'}
	},
	IndividualDeck: {
		screen: IndividualDeck,
		navigationOptions: {
			headerTintColor: '#000'
		}
	}
})


export default class Index extends React.Component{
	render(){
		return (
			<Provider store={createStore(reducer)}>
          <View style={{ flex: 1}}><AppNavigator /></View>
			 </Provider>
			)
	}
}