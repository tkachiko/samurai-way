import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext';

export const DialogsContainer: React.FC = () => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        const state = store.getState().dialogsPage;
        const sendMessage = () => {
          store.dispatch(sendMessageAC(state.newMessageBody));
        };

        const onNewMessageChange = (text: string) => {
          store.dispatch(updateNewMessageBodyAC(text));
        };
        return <Dialogs sendMessage={sendMessage}
                        updateNewMessageBody={onNewMessageChange}
                        newMessageBody={state.newMessageBody}
                        dialogs={state.dialogs}
                        messages={state.messages}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;