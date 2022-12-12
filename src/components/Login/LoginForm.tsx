import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/Input';
import {required} from '../../utils/validators/validators';

export type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return <form action="" onSubmit={props.handleSubmit}>
    <div>
      <Field type="text"
             placeholder={'Login'}
             name={'Login'}
             component={Input}
             validate={[required]}
      />
    </div>
    <div>
      <Field type="password"
             placeholder={'Password'}
             name={'Password'}
             component={Input}
             validate={[required]}
      />
    </div>
    <div>
      <Field type="checkbox"
             name={'Remember me'}
             component={Input}
      />Remember me
    </div>
    <div>
      <button type={'submit'}>Login</button>
    </div>
  </form>;
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);
