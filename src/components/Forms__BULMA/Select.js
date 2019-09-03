import styled from 'styled-components'
import { darken } from 'polished'

import { InputTextarea } from './base/InputTextarea'
import { colors, forms, fonts } from 'Variables'
import { Loader } from 'Helpers'

export const Select = styled.select`
  display: inline-block;
  font-size: ${props =>
    props.fontSize ? fonts.size[props.fontSize] : forms.input.fontSize};

  max-width: 100%;
  position: relative;
  vertical-align: top;

  :not(.is-multiple) {
    height: $input-height;

    :not(.is-loading) {
      :hover::after {
        border-color: ${forms.input.hover.borderColor};
      }

      ::after {
        border: 3px solid transparent;
        border-color: ${forms.input.arrowColor};
        border-radius: 2px;
        border-right: 0;
        border-top: 0;
        content: ' ';
        display: block;
        height: 0.625em;
        margin-top: -0.4375em;
        pointer-events: none;
        position: absolute;
        right: 1.125em;
        top: 50%;
        transform: rotate(-45deg);
        transform-origin: center;
        width: 0.625em;
        z-index: 4;
      }
    }
  }

  ${props =>
    props.rounded &&
    `
    select {
      border-radius: $radius-rounded;
      padding-left: 1em;
    }
  `}

  select {
    ${InputTextarea}

    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;

    ::-ms-expand {
      display: none;
    }

    [disabled]:hover {
      border-color: ${forms.input.disabled.borderColor};
    }

    &:not([multiple]) {
      padding-right: 2.5em;
    }

    &[multiple] {
      height: auto;
      padding: 0;

      option {
        padding: 0.5em 1em;
      }
    }
  }

  ${props =>
    props.color &&
    `
    :not(:hover)::after { 
      border-color: ${colors[props.color]}
    }

    select { 
      border-color: ${colors[props.color]};

      :hover { border-color: darken(0.05, ${colors[props.color]}); }
      :active { box-shadow: ${forms.input.active.shadow}; }
      :focus { box-shadow: ${forms.input.focus.shadow}; }

      ${props => props.active && `box-shadow: ${forms.input.active.shadow};`}
      ${props => props.active && `box-shadow: ${forms.input.focus.shadow};`}

      }
    `}

  ${props =>
    props.disabled &&
    `
      ::after: border-color: ${forms.input.disabled.borderColor};
    `}

  ${props =>
    props.fullWidth &&
    `
    width: 100%;
    select { 
      width: 100%;
    }
  `}


  ${props =>
    props.loading &&
    `
    ::after {
      margin-top: 0;
      position: absolute;
      right: 0.625em;
      top: 0.625em;
      transform: none;
    }
  `}

  &.is-loading {
    &::after {
      ${Loader};

      margin-top: 0;
      position: absolute;
      right: 0.625em;
      top: 0.625em;
      transform: none;
    }

    ${props =>
      props.fontSize &&
      `
      :after {
        font-size: ${props =>
          props.fontSize ? fonts.size[props.fontSize] : forms.input.fontSize};
      }
    `}
  }
`
