import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// import { FirebaseProvider } from 'Context'
import { FirebaseContext } from 'Context'
import GlobalCss from 'Global'
import theme from 'Theme'

import { iconLibrary } from 'Styles/icons'

export const BaseLayout = ({ children }) => {
  // const { firebase } = useContext(FirebaseContext)
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <FirebaseProvider> */}
        <>{children}</>
        {/* </FirebaseProvider> */}
      </ThemeProvider>
      <GlobalCss />
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
