import { Button, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import * as React from 'react'

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit:(values: MyFormValues) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  const intialValues:MyFormValues = {firstName: '', lastName: '', email: ''}
  return (
    <Formik initialValues={intialValues} onSubmit={(values, actions) => {
      console.log({ values, actions });
      onSubmit(values)
      actions.setSubmitting(false)
      alert(JSON.stringify(values, null, 2));
      }
    }>{({values, handleChange, handleBlur}) => (
        
      <Form>
        <TextField name="firstName" value={values.firstName} onChange={handleChange} placeholder="First Name" /><br/>
        <TextField name="lastName" value={values.lastName} onChange={handleChange} placeholder="last Name" /><br/>
        <TextField name="email" value={values.email} onChange={handleChange} placeholder="Email"/><br/>
        <Button type="submit">Submit</Button>

        <pre>{JSON.stringify(values, null, 2)}</pre>          
      </Form>
        )}
    </Formik>
  )
}
