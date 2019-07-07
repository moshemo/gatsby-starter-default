import { useState } from 'react'

function useFormValidation(initialState) {
  const [values, setValues] = useState(initialState)

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return { handleChange, values }
}

export default useFormValidation
