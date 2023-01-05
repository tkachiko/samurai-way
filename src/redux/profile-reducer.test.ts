import {v1} from 'uuid'
import {addPost, InitialStateType, profileReducer, setStatus} from './profile-reducer'
import {PostType, ProfileType} from '../types/types'

let startState: InitialStateType

beforeEach(() => {
  startState = {
    posts: [
      {id: v1(), message: 'It\'s my first post', likesCount: 17},
      {id: v1(), message: 'Hi, how are you?', likesCount: 5},
    ] as Array<PostType>,
    profile: {
      userId: 1,
      lookingForAJob: false,
      lookingForAJobDescription: 'yes',
      fullName: 'Some Name',
      contacts: {
        github: 'null',
        vk: 'null',
        facebook: 'null',
        instagram: 'null',
        twitter: 'null',
        website: 'null',
        youtube: 'null',
        mainLink: 'null',
      },
      photos: {small: 'afsfaf', large: 'asfafs'},
    } as ProfileType,
    status: '',
  }
})

test('posts length should be incremented', () => {
  const action = addPost('New post')

  const endState = profileReducer(startState, action)

  expect(endState.posts.length).toBe(3)
})
test('new post message should be correct', () => {
  const action = addPost('New post')

  const endState = profileReducer(startState, action)

  expect(endState.posts[2].message).toBe('New post')
})
test('status should be set', () => {
  const action = setStatus('I\'m awesome!')

  const endState = profileReducer(startState, action)

  expect(endState.status).toBeDefined()
})
test('status text should be correct', () => {
  const action = setStatus('I\'m awesome!')

  const endState = profileReducer(startState, action)

  expect(endState.status).toBe('I\'m awesome!')
})