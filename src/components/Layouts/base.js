import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalCss from 'Global'
import theme from 'Theme'

export const BaseLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
      <GlobalCss />
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
