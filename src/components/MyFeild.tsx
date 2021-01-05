import * as React from 'react'
import { FieldProps } from 'formik'
import { TextField } from '@material-ui/core'

interface Props extends FieldProps{
  label: string, 
  placeholder: string,
}

export const MyField: React.FC<Props> = ({label, placeholder, field}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    {...field}
  />
)