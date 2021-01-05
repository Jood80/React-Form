import * as React from 'react'
import { Field, Form, Formik } from 'formik'
import { Button } from '@material-ui/core'
import { MyField } from './MyFeild'

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
      onSubmit(values)
      actions.setSubmitting(false)
    }}>
        <Form>
        <Field name='firstName' placeholder="First Name" label="first name" component={MyField} /><br/>
        <Field name='lastName' placeholder="Last Name" label="last name" component={MyField} /><br/>
        <Field name='email' placeholder="Email" label="email" component={MyField} /><br/>
        <Button type="submit" color="primary">Submit</Button>
      </Form>
    </Formik>
  )
}
