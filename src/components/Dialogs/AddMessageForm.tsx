import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {TextArea} from '../common/FormsControls/TextArea';

export type AddMessageFormDataType = {
  newMessageBody: string
}

const maxLength50 = maxLengthCreator(50);

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component={TextArea}
           name={'newMessageBody'}
           placeholder={'Enter your message'}
           validate={[required, maxLength50]}
           style={{width: '300px'}}>
    </Field>
    <button type={'submit'} style={{width: '50px', height: '30px', alignSelf: 'end'}}>Send
    </button>
  </form>;
};

export const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);
