import {v1} from 'uuid'
import {DialogsDataType, dialogsReducer, InitialStateType, MessagesDataType, sendMessage} from './dialogs-reducer'

let startState: InitialStateType

beforeEach(() => {
  startState = {
    dialogs: [
      {id: v1(), name: 'Emmett'},
      {id: v1(), name: 'Marty'},
      {id: v1(), name: 'Jennifer'},
      {id: v1(), name: 'Lorraine'},
      {id: v1(), name: 'George'},
    ] as Array<DialogsDataType>,
    messages: [
      {id: v1(), message: 'Hey!'},
      {id: v1(), message: 'How are you?'},
      {id: v1(), message: 'Let\'s go!'},
    ] as Array<MessagesDataType>,
  }
})

test('messages length should be incremented', () => {
  const action = sendMessage('Hello there!')

  const endState = dialogsReducer(startState, action)

  expect(endState.messages.length).toBe(4)
})
test('message text should be correct', () => {
  const action = sendMessage('Hello there!')

  const endState = dialogsReducer(startState, action)

  expect(endState.messages[3].message).toBe('Hello there!')
})