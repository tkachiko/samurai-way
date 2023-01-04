import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

export type PropsType = {
  onSubmit: (data: FormDataType) => void
}

export type FormDataType = {
  newPostText: string
}

export const AddPostForm: React.FC<PropsType> = (props) => {
  const {
    register,
    handleSubmit,
  } = useForm<FormDataType>({
    defaultValues: {
      newPostText: '',
    },
  })

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    props.onSubmit(data)
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <textarea {...register('newPostText')}
                placeholder={'Enter you message'}
      />
    </div>
    <div>
      <button type={'submit'}>Add</button>
    </div>
  </form>
}