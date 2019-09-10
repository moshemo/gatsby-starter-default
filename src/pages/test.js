import React from 'react'
import { Field, Form, withFormik } from 'formik'

import { Button } from 'Components'

import { MainLayout } from 'Layouts'
// import TestPage2 from './test2'

const TestPage = ({ handleChange, values }) => (
  <MainLayout>
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <Button type="submit">Submit</Button>
    </Form>
  </MainLayout>
)

const FormikTest = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: '',
      password: '',
    }
  },
  handleSubmit(values) {
    console.log('Values: ', values)
  },
})

// const UsingFormikTest = props => (
//   <FormikTest email="test@test.com" />
// )

// export default TestPage
export default FormikTest(TestPage)
