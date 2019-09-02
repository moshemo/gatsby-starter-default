import { useState } from 'react'

export function useForms(initialState, auth) {
  const [values, setValues] = useState(initialState)

  function handleChange(event) {
    event.persist()
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    auth()
  }

  return { handleChange, handleSubmit, values }
}
