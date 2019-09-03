import { css } from 'styled-components'

import { colors, fonts, forms } from 'Variables'

export const InputTextarea = css`

  -moz-appearance: none;
  -webkit-appearance: none;



  background-color: ${props =>
    props.static ? `transparent` : forms.input.bgColor};


  border-radius: ${forms.input.radius};
  color: ${forms.input.textColor};

  border-style: solid;
  border-width: ${forms.input.borderWidth};
  border-radius: ${props =>
    props.rounded ? '290486px' : forms.input.borderRadius};

  border-color: ${props => {
    if (props.color && !props.active && !props.active) {
      return `${colors[props.color]};`
    } else if (props.active) {
      return `${forms.input.active.borderColor};`
    } else if (props.focus) {
      return `${forms.input.focus.borderColor};`
    } else if (props.hover) {
      return `${forms.input.hover.borderColor};`
    } else if (props.static) {
      return `transparent;`
    } else {
      return `${forms.input.borderColor};`
    }
  }}

  box-shadow: ${props => {
    if (props.active) {
      return `${forms.input.active.shadow}; outline: 0;`
    } else if (props.focus) {
      return `${forms.input.focus.shadow}; outline: 0;`
    } else if (props.shadow) {
      return `none;`
    } else {
      return `inset 0 1px 2px rgba(0, 0, 0, 0.1);`
    }
  }};

  align-items: center;
  justify-content: flex-start;
  display: ${props => {
    if (props.fullWidth) {
      return `block;`
    } else if (props.inline) {
      return `inline;`
    } else {
      return `inline-flex;`
    }
  }}

  font-size: ${props =>
    props.fontSize ? fonts.size[props.fontSize] : forms.input.fontSize};

  height: ${forms.input.height};
  line-height: ${forms.input.lineHeight};
  padding-bottom: ${forms.input.paddingVertical}px;
  padding-top: ${forms.input.paddingVertical}px;

  padding-left: ${props => {
    if (props.rounded) {
      return `1em;`
    } else if (props.static) {
      return `0;`
    } else {
      return `${forms.input.paddingHorizontal}px;`
    }
  }}

  padding-right: ${props => {
    if (props.rounded) {
      return `1em;`
    } else if (props.static) {
      return `0;`
    } else {
      return `${forms.input.paddingHorizontal}px;`
    }
  }}


  position: relative;
  vertical-align: top;

  max-width: 100%;
  width: ${props => {
    if (props.fullWidth) {
      return `100%;`
    } else if (props.inline) {
      return `auto;`
    } else {
      return `100%;`
    }
  }}

  :active  { 
      border-color: ${forms.input.active.borderColor};
      box-shadow: ${forms.input.active.shadow}; 
      outline: 0;
    }

  :focus  { 
      border-color: ${forms.input.focus.borderColor};
      box-shadow: ${forms.input.focus.shadow}; 
      outline: 0;
    }

  :hover {
    border-color: ${forms.input.hover.borderColor};
  }

  ::placeholder {
     color: ${forms.input.placeholderColor}
  }

  &[disabled] { 
    background-color: ${forms.input.disabled.backgroundColor};
    border-color: ${forms.input.disabled.borderColor};
    box-shadow: none;
    color: ${forms.input.disabled.textColor};
    cursor: not-allowed; 

    ::placeholder { color: ${forms.input.disabled.placeholderColor}; }
    }

  &[readonly] { box-shadow: none; }
`
