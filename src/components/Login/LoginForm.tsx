import React from 'react'
import styles from './LoginForm.module.css'
import {SubmitHandler, useForm} from 'react-hook-form'

type PropsType = {
  onSubmit: (data: FormDataType) => void
  errorMessage: null | string
  captchaUrl: string | null
}
export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  errorMessage: null | string
  captcha: string | null
}

export const LoginForm: React.FC<PropsType> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<FormDataType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
  })

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    props.onSubmit(data)
    props.errorMessage && setError('errorMessage', {type: 'server side', message: 'errorMessage'})
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <input {...register('email', {
        required: 'Email is required',
      })}
             type={'text'}
             placeholder={'Email'}
      />
      {errors.email?.message && <span style={{color: 'red'}}>{errors.email.message}</span>}
    </div>
    <div>
      <input {...register('password', {
        required: 'Password is required',
        minLength: {
          value: 3,
          message: 'Password should contain 3 or more characters',
        },
      })}
             type={'password'}
             placeholder={'Password'}
      />
      {errors.password?.message && <span style={{color: 'red'}}>{errors.password.message}</span>}
    </div>
    <div>
      <input type="checkbox"
             {...register('rememberMe')}
      />Remember me
    </div>
    {props.errorMessage &&
      <div className={styles.formSummaryError}>
        {props.errorMessage}
      </div>}
    <div className={styles.captcha}>
      {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'} />}
    </div>

    <div>
      {props.captchaUrl && (
        <input {...register('captcha')}
               type={'text'}
               placeholder={'Enter captcha'}
               name="captcha" />
      )}
    </div>
    <div>
      <button type={'submit'}>Login</button>
    </div>
  </form>
}