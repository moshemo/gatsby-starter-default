import React from 'react'
import styled from 'styled-components'
import { math } from 'polished'
import { FontAwesomeIcon as Icon } from 'FontAwesome'

import { InputCss } from './Input/CSS'

import { colors, forms } from 'Variables'

const SelectBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 100%;
  position: relative;
  vertical-align: top;
`

const SelectElement = styled.select`
  ${InputCss};

  appearance: menulist;
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: 0;
  padding-right: ${forms.input.height};

  appearance: button;
  color: ${colors.dark};

  ${props => props.fullWidth && `grid-column: 1 / -1;`}
`

const SelectIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${forms.icon.color};
  height: ${forms.input.height};
  pointer-events: none;
  position: absolute;
  top: 30;
  right: 0;
  width: ${forms.input.height};
  z-index: 4;
`

export const Select = props => {
  const { children, icon = 'angle-down' } = props
  return (
    <SelectBase className={props.className}>
      <SelectElement>{children}</SelectElement>
      <SelectIcon>
        <Icon icon={icon} />
      </SelectIcon>
    </SelectBase>
  )
}

// const SelectBaseOld = styled.div`
//   display: inline-block;
//   height: ${props => (props.size ? props.size : forms.input.height)};
//   max-width: 100%;
//   position: relative;
//   vertical-align: top;

//   ::before {
//     content: '\f358';
//     font-family: 'Font Awesome 5 Pro';
//     text-align: center;
//     line-height: ${props => (props.size ? props.size : forms.input.height)};
//     color: ${props =>
//       props.dropDownColor ? props.dropDownColor : forms.select.dropDownColor};

//     font-size: ${props =>
//       props.size
//         ? math(`${props.size} * 0.6`)
//         : math(`${forms.input.height} * 0.6`)};

//     pointer-events: none;

//     position: absolute;
//     top: 0;
//     right: 0;

//     background: ${props =>
//       props.dropDownBg
//         ? props.dropDownBg
//         : forms.select.dropDownBackgroundColor};

//     height: ${props => (props.size ? props.size : forms.input.height)};
//     width: ${props => (props.size ? props.size : forms.input.height)};
//   }

//   :hover::before {
//     background-color: ${props =>
//       props.hoverColor ? props.hoverColor : forms.select.dropDownHoverColor};
//   }

//   select {
//     cursor: pointer;
//     display: block;
//     font-size: 1em;
//     max-width: 100%;
//     outline: 0;
//     padding-right: ${props => (props.size ? props.size : forms.input.height)};

//     appearance: ${forms.select.appearance};
//     background-color: ${props =>
//       props.bg ? props.bg : forms.select.backgroundColor};
//     border: ${props => (props.border ? props.border : forms.select.border)};
//     color: ${props => (props.color ? props.color : forms.select.color)};

//     :focus {
//       border: none;
//     }
//   }
// `
