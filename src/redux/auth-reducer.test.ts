import {authReducer, InitialStateType, setAuthUserData} from './auth-reducer'

let startState: InitialStateType

beforeEach(() => {
  startState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isFetching: false,
    error: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string,
  }
})

test('user should be authorized', () => {
  const action = setAuthUserData('test@gmail.com', 1, 'test@gmail.com', true, null)

  const endState = authReducer(startState, action)

  expect(endState.userId).toBe(1)
  expect(endState.email).toBe('test@gmail.com')
  expect(endState.login).toBe('test@gmail.com')
  expect(endState.isAuth).toBe(true)
})
