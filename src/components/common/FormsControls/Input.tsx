import React from 'react'
import {FormControl} from './FormControl'

type InputType = {
  input: any
  meta: any
}

export const Input: React.FC<InputType> = ({input, meta, children, ...props}) => {
  return <FormControl {...props} input={input} meta={meta}><input{...input} {...props} /></FormControl>
}