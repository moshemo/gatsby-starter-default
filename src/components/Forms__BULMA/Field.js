import React from 'react'
import styled from 'styled-components'

import { Button } from 'Components'

const FieldBase = (props, { label }) => {
  return (
    <div class="field">
      {label && <label class="label">{label}</label>}
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>
  )
}

// const Control = styled.div``
// const Input = styled.input``
// const Select = styled.select``

// const Field = styled.div``
