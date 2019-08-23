import styled from "styled-components"
import { Editor as SlateEditor } from "slate-react"

export const StyledEditor = styled(SlateEditor)`
  /* background-color: #454545; */
  /* color: #fafafa; */
  margin: 100px auto;
  padding: 32px 24px;
  /* text-align: center; */
`

export const Toolbar = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0 0 10px;
`

export const Button = styled.button`
  border: 0;
  margin-right: 5px;
  outline: 0;
  cursor: pointer;
`
