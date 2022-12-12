import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {TextArea} from '../../common/FormsControls/TextArea';

export type AddNewPostFormDataType = {
  newPostText: string
}

const maxLength10 = maxLengthCreator(10);

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={TextArea}
             name={'newPostText'}
             placeholder={'Post message'}
             validate={[required, maxLength10]}
      />
    </div>
    <div>
      <button type={'submit'}>Add</button>
    </div>
  </form>;
};

export const AddPostForm = reduxForm<AddNewPostFormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm);
