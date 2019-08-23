import React, { useRef, useState } from "react"

import { initValue } from "./data"
import { onClickMark, onKeyDown, renderMark } from "./const"
import { StyledEditor, Toolbar, Button } from "./styles"
import {
  FiBold as BoldIcon,
  FiCode as CodeIcon,
  FiItalic as ItalicIcon,
  FiList as ListIcon,
  FiUnderline as UnderlineIcon,
} from "react-icons/fi"

export const Editor = props => {
  const editorRef = useRef()
  const [value, setValue] = useState(initValue)

  const handleChange = options => setValue(options.value)
  const handlePointerDown = type => event => onClickMark(event, type, editorRef)

  return (
    <>
      <Toolbar>
        <Button onPointerDown={handlePointerDown("bold")}>
          <BoldIcon />
        </Button>
        <Button onPointerDown={handlePointerDown("italic")}>
          <ItalicIcon />
        </Button>
        <Button onPointerDown={handlePointerDown("underline")}>
          <UnderlineIcon />
        </Button>
        <Button onPointerDown={handlePointerDown("list")}>
          <ListIcon />
        </Button>
        <Button onPointerDown={handlePointerDown("code")}>
          <CodeIcon />
        </Button>
      </Toolbar>

      <StyledEditor
        autoFocus
        spellCheck
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder="Add content here..."
        ref={editorRef}
        renderMark={renderMark}
        // renderNode={renderNode}
        value={value}
      />
    </>
  )
}
