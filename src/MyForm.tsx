import * as React from 'react'
import { TextField} from '@material-ui/core'
import { Formik, Form } from 'formik'

interface Props {
  onSubmit: () => void;
}

export const MyForm: React.FC<Props> = ({onSubmit}) => (
  <Formik initialValues={{firstName:'', lastName:'', email:'' }} onSubmit={()=> onSubmit()}>
    <Form>
    <TextField/>
    </Form>
  </Formik>
)
  
