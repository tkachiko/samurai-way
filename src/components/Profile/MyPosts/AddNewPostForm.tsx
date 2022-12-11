import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';

export type AddNewPostFormDataType = {
  newPostText: string
}

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your message'}/>
    </div>
    <div>
      <button type={'submit'}>Add</button>
    </div>
  </form>;
};