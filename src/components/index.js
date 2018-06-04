import React from 'react'
import {View} from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers/index'
import {createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import {setNotification} from '../util/notificationAPI';
import NewDeck from './deck/NewDeck'
import DeckList from './deck/DeckList'
import NewQuestion from './question/NewQuestion'
import IndividualDeck from './deck/IndividualDeck'
import Quiz from './quiz/Quiz.js'

const Tabs = createBottomTabNavigator({
	DeckList: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: 'All Decks'
		}
	},
	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarLabel: 'New Deck'
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
	},
	Quiz: {
       screen: Quiz,
       navigationOptions: {
       	title: 'Quiz',
       	headerTintColor: '#000'
       }
	},
	NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: 'Add Question',
            headerTintColor: '#000',
        }
},
})


export default class Index extends React.Component{

	componentDidMount(){
		setNotification();
	}
	render(){
		return (
			<Provider store={createStore(reducer)}>
          <View style={{ flex: 1}}><AppNavigator /></View>
			 </Provider>
			)
	}
}