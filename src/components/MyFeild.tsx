import { TextField } from '@material-ui/core'
import { FieldProps } from 'formik'
import * as React from 'react'


export const MyField: React.FC<FieldProps & {placeholder: string}> = ({placeholder, field}) => (
  <TextField
    placeholder={placeholder}
    {...field}
  />
)