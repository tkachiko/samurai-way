import React from 'react'
import {Alert, Button, Form, Input} from 'antd'
import Checkbox from 'antd/lib/checkbox'
import {ContactsType, ProfileType} from '../../../../../types/types'
import {Controller, FieldPath, SubmitHandler, useForm} from 'react-hook-form'

type PropsType = {
  profile: ProfileType
  error: string | null
  setEditMode: (value: boolean) => void
  saveProfile: (values: ProfileType, setEditMode: (value: boolean) => void) => void
}

export const ProfileDataForm: React.FC<PropsType> = (props) => {
  const {
    handleSubmit,
    control,
  } = useForm<ProfileType>({
    defaultValues: {
      fullName: props.profile.fullName,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      aboutMe: props.profile.aboutMe,
      contacts: {
        facebook: props.profile.contacts.facebook,
        website: props.profile.contacts.website,
        vk: props.profile.contacts.vk,
        twitter: props.profile.contacts.twitter,
        instagram: props.profile.contacts.instagram,
        youtube: props.profile.contacts.youtube,
        github: props.profile.contacts.github,
        mainLink: props.profile.contacts.mainLink,
      } as ContactsType,
    },
  })

  const onSubmit: SubmitHandler<ProfileType> = (data) => {
    props.saveProfile(data, props.setEditMode)
  }

  const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16},
  }

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  }
  /* eslint-enable no-template-curly-in-string */

  return (
    <Form {...layout} name="nest-messages" onFinish={handleSubmit(onSubmit)} validateMessages={validateMessages}>
      <Form.Item name={'fullName'} label="Name">
        <Controller
          name="fullName"
          control={control}
          rules={{required: true}}
          render={({field}) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item name={'lookingForAJob'} label="Looking for a job">
        <Controller
          name="lookingForAJob"
          control={control}
          render={({field}) => <Checkbox {...field} checked={field.value} />}
        />
      </Form.Item>
      <Form.Item name={'lookingForAJobDescription'} label="My skills">
        <Controller
          name="lookingForAJobDescription"
          control={control}
          rules={{required: true}}
          render={({field}) =>
            <Input.TextArea {...field} placeholder="Tell about your professional skills and what kind of job you are looking for" />}
        />
      </Form.Item>
      <Form.Item name={'aboutMe'} label="About me">
        <Controller
          name="aboutMe"
          control={control}
          rules={{required: true}}
          render={({field}) => <Input.TextArea {...field} placeholder="Some info about you" />}
        />
      </Form.Item>
      {Object.keys(props.profile.contacts).map((key) => {
        type T = keyof typeof props.profile.contacts;
        return (
          <Form.Item name={key} label={key} key={key}>
            <Controller
              name={'contacts.' + key as FieldPath<ProfileType>}
              control={control}
              render={({field: {onChange, onBlur, value, ref, ...field}}) => {
                return <Input onChange={onChange}
                              {...field}
                              ref={ref}
                              placeholder={key}
                              defaultValue={props.profile.contacts[key as T]}
                />
              }}
            />
          </Form.Item>
        )
      })}
      <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
      {props.error && <Alert
        message={props.error}
        type="error"
      />}
    </Form>
  )
}