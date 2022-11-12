import {v1} from 'uuid';
import {addPost, profileReducer, updateNewPostText} from './profile-reducer';
import {dialogsReducer, sendMessage, updateNewMessageBody} from './dialogs-reducer';

type DialogsDataType = {
  id: string
  name: string
}
type PostsDataType = {
  id: string
  message: string
  likesCount: number
}
type MessagesDataType = {
  id: string
  message: string
}
type ProfilePageType = {
  posts: PostsDataType[]
  newPostText: string
}
type DialogsPageType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  newMessageBody: string
}
type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}
type StoreType = {
  _state: StateType
  getState: () => StateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsTypes) => void
}
type ActionsTypes =
  ReturnType<typeof addPost>
  | ReturnType<typeof updateNewPostText>
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof updateNewMessageBody>

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: v1(), message: 'It\'s my first post', likesCount: 17},
        {id: v1(), message: 'Hi, how are you?', likesCount: 5},
      ],
      newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
      dialogs: [
        {id: v1(), name: 'Emmett'},
        {id: v1(), name: 'Marty'},
        {id: v1(), name: 'Jennifer'},
        {id: v1(), name: 'Lorraine'},
        {id: v1(), name: 'George'},
      ],
      messages: [
        {id: v1(), message: 'Hey!'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Let\'s go!'},
      ],
      newMessageBody: '',
    }
  },
  _callSubscriber() {
    console.log();
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber();
  }
};
