import {ActionsTypes} from '../types/types'
import {getAuthUserData} from './auth-reducer'
import {AppThunk} from './redux-store'

export const INITIALIZED_SUCCESS = 'samurai-way/app/INITIALIZED_SUCCESS'

export type InitialStateType = typeof initialState

const initialState = {
  initialized: false as boolean,
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

// action creators
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

// thunk creators
export const initializeApp = (): AppThunk => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}
