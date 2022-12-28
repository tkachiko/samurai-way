import {appReducer, initializedSuccess, InitialStateType} from './app-reducer'

let startState: InitialStateType

beforeEach(() => {
  startState = {
    initialized: false,
  }
})

test('user should be authorized', () => {
  const action = initializedSuccess()

  const endState = appReducer(startState, action)

  expect(endState.initialized).toBe(true)
})
