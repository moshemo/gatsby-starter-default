import React from "react"
import isHotKey from "is-hotkey"

export const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props
  switch (mark.type) {
    case "bold":
      return <strong {...attributes}>{children}</strong>
    case "italic":
      return <i {...attributes}>{children}</i>
    case "underline":
      return <u {...attributes}>{children}</u>
    case "code":
      return <code {...attributes}>{children}</code>
    case "list":
      return (
        <ul {...attributes}>
          <li>{children}</li>
        </ul>
      )
    default:
      return next()
  }
}

export const onKeyDown = (event, editor, next) => {
  if (event.key === "Enter") {
    editor.insertBlock("paragraph")
  }

  if (isHotKey("mod+b", event)) {
    editor.toggleMark("bold")
  } else if (isHotKey("mod+i", event)) {
    editor.toggleMark("italic")
  } else if (isHotKey("mod+u", event)) {
    editor.toggleMark("underline")
  } else if (isHotKey("mod+`")) {
    editor.toggleMark("code")
  } else {
    next()
  }
}

export const onClickMark = (event, type, editorRef) => {
  event.preventDefault()
  editorRef.current.toggleMark(type)
}

export const renderNode = (props, editor, next) => {
  const { children, node, attributes } = props
  switch (node.type) {
    case "h1":
      return <h1 {...attributes}>{children}</h1>
    case "h2":
      return <h2 {...attributes}>{children}</h2>
    case "h3":
      return <h3 {...attributes}>{children}</h3>
    case "h4":
      return <h4 {...attributes}>{children}</h4>
    case "h5":
      return <h5 {...attributes}>{children}</h5>
    case "h6":
      return <h6 {...attributes}>{children}</h6>
    case "paragraph":
      return <p {...attributes}>{children}</p>
    default:
      return next()
  }
}
