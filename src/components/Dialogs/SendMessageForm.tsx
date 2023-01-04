import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

type PropsType = {
  onSubmit: (data: FormDataType) => void
}

export type FormDataType = {
  newMessageBody: string
}

export const SendMessageForm: React.FC<PropsType> = (props) => {
  const {
    register,
    handleSubmit,
  } = useForm<FormDataType>({
    defaultValues: {
      newMessageBody: '',
    },
  })

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    props.onSubmit(data)
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <textarea {...register('newMessageBody')}
              placeholder={'Enter you message'}
    />
    <button type={'submit'} style={{width: '50px', height: '30px', alignSelf: 'end'}}>Send
    </button>
  </form>
}