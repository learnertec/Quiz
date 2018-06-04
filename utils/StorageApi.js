import {AsyncStorage} from 'react-native'

export const DECKS_STORAGE_KEY = 'decks:mobile-flashcards'

let data = {
      React: {
      	title: 'React',
      	questions: [
          {
          	question: 'What is React?',
          	answer: 'A library for managing user interfaces'
          },
          {
          	question: 'Where do you make Ajax request in React?',
          	answer: 'The componentDidMount lifecycle event',
          }
      	]
      },

      JavaScript: {
         title: 'JavaScript',
         questions: [
           {
           	question: 'What is closure?',
           	answer: 'The combination of a function and the lexical environment within which that function was declared.',
           
           }
    
         ]
      }
 
}


export function fetchDecks(){
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
		return results = null ? initialData() : JSON.parse(results)
	})
}


export function createDeck(deck){
	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify(deck));
}


export function addQuestionForDeck({card,deckName}){
	return AsyncStorage.getItem(DECKS_STORAGE_KEY,(arr,result) => {
		let decks = JSON.parse(result);
      
        let newQuestions = JSON.parse(JSON.stringify(decks[deckName].questions))
          newQuestions[newQuestions.length] = card;

		let value = JSON.stringify({
			[deckName]: {title: deckName, questions: newQuestions}
		})
		AsyncStorage.mergeItem(DECKS_STORAGE_KEY,value);
	})
}


export function initialData(){
	AsyncStorage.setItem(DECKS_STORAGE_KEY,JSON.stringify(data))
	return data;
}