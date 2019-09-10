import React from 'react'
import { ErrorMessage, Form } from 'formik'

import { Button } from 'Components'
import { TextInput as Text, Email, Password } from 'Components/Forms'

export const FormComp = props => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    isValid,
    setFieldTouched,
    touched,
    values,
  } = props
  // console.table(props)

  // const change = (name, event) => {
  //   event.persist()
  //   handleBlur(event)
  //   handleChange(event)
  //   setFieldTouched(name, true, false)
  // }
  return (
    <Form>
      <h3>Sign Up</h3>
      <Text
        id="name"
        label="Name"
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
      />
      <ErrorMessage component="p" name="name" />
      <Email
        id="email"
        label="Email 1"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
      />
      <Email
        id="email"
        name="email2"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
      />
      <ErrorMessage component="p" name="email" />
      <Password
        id="password"
        label="Password"
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
      />
      <ErrorMessage component="p" name="password" />
      <Password
        id="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.confirmPassword}
      />
      <ErrorMessage component="p" name="confirmPassword" />
      <Button disabled={!isValid || isSubmitting} type="submit">
        Submit
      </Button>
    </Form>
  )
}
