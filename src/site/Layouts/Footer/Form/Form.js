import React from 'react'
// import useFormValidation from 'Forms/useFormValidation'
import { Field, FormButton } from './Styles'

const INITIAL_STATE = {
  email: '',
}

export const ContactForm = props => {
  const { handleChange, values } = useFormValidation(INITIAL_STATE)

  const handleSubmit = event => {
    event.preventDefault()
    console.log('authenticated', values.email)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '800px', margin: '0 auto 110px' }}
    >
      <Field name="name" placeholder="Name" type="text" />
      <Field
        name="email"
        onChange={handleChange}
        placeholder="Email"
        type="email"
        value={values.email}
      />

      <Field textArea name="password" placeholder="Message" />

      <FormButton type="submit">Submit</FormButton>
    </form>
  )
}
