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
    <Formik initialValues={ intialValues } onSubmit={(values, actions) => {
      console.log({ values, actions });
      onSubmit(values)
      actions.setSubmitting(false)
      alert(JSON.stringify(values, null, 2));
      }
    }>{({ values }) => (
        
        <Form>
        <Field name='firstName' placeholder="First Name" component={MyField} /><br/>
        <Field name='firstName' placeholder="First Name" component={MyField} /><br/>
        <Field name='firstName' placeholder="First Name" component={MyField} /><br/>
       
        <Button type="submit">Submit</Button>

        <pre>{JSON.stringify(values, null, 2)}</pre>          
      </Form>
        )}
    </Formik>
  )
}
