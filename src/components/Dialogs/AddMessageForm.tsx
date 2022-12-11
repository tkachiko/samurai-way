import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';

export type AddMessageFormDataType = {
  newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component={'textarea'}
           name={'newMessageBody'}
           placeholder={'Enter your message'}
           style={{width: '300px'}}>
    </Field>
    <button type={'submit'} style={{width: '50px', height: '30px', alignSelf: 'end'}}>Send
    </button>
  </form>;
};