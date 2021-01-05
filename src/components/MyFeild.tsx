import * as React from 'react'
import { FieldProps } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'

// adding TextFieldProps declare the types of the field props byDefault for <TextField>

export const MyField: React.FC<FieldProps & TextFieldProps> = ({label, placeholder, field}) => (
  <TextField
    color="primary"
    label={label}
    placeholder={placeholder}
    {...field}
  />
)