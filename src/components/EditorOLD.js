import React, { useState } from "react"
import styled from "styled-components"
import { Editor as SlateEditor } from "slate-react"
import isHotKey from "is-hotkey"
import { initValue } from "../data/slate/InitValue"

const StyledEditor = styled(SlateEditor)`
  background-color: #454545;
  color: #fafafa;
  margin: 100px auto;
  padding: 32px 24px;
  text-align: center;
`

const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props
  switch (mark.type) {
    case "bold":
      return <strong {...attributes}>{children}</strong>
    case "italic":
      return <i {...attributes}>{children}</i>
    case "underline":
      return <u {...attributes}>{children}</u>
    default:
      return next()
  }
}

const onKeyDown = (event, editor, next) => {
  if (isHotKey("mod+b", event)) {
    editor.toggleMark("bold")
  } else if (isHotKey("mod+i", event)) {
    editor.toggleMark("italic")
  } else if (isHotKey("mod+u", event)) {
    editor.toggleMark("underline")
  } else {
    next()
  }
}

export const Editor = props => {
  const [value, setValue] = useState(initValue)
  const handleChange = options => setValue(options.value)

  return (
    <StyledEditor
      onChange={handleChange}
      onKeyDown={onKeyDown}
      renderMark={renderMark}
      value={value}
    />
  )
}
