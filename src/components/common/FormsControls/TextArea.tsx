import React from 'react'
import {FormControl} from './FormControl'

type TextAreaType = {
  input: any
  meta: any
}

export const TextArea: React.FC<TextAreaType> = ({input, meta, children, ...props}) => {
  return <FormControl {...props} input={input} meta={meta}><textarea{...input} {...props} /></FormControl>
}