import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/Input'
import {required} from '../../utils/validators/validators'
import styles from './../common/FormsControls/FormControls.module.css'

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
  return <form onSubmit={handleSubmit}>
    <div>
      <Field type="text"
             placeholder={'Email'}
             name={'email'}
             component={Input}
             validate={[required]}
      />
    </div>
    <div>
      <Field type="password"
             placeholder={'Password'}
             name={'password'}
             component={Input}
             validate={[required]}
      />
    </div>
    <div>
      <Field type="checkbox"
             name={'rememberMe'}
             component={Input}
      />Remember me
    </div>
    {error && <div className={styles.formSummaryError}>
      {error}
    </div>}
    <div>
      <button type={'submit'}>Login</button>
    </div>
  </form>
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
