import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'styled-components'

// import { width } from 'styled-system'
import theme from '../styles/theme'

import Box from './Box'

import './layout.css'

const Layout = (props, { children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div
            style={{
              display: `flex`,
            }}
          >
            <Box
              color="light"
              bg="primary.dark"
              width={{
                sm: '64px',
                md: '128px',
                lg: '512px',
              }}
              paddingTop={1}
              paddingBottom={4}
            >
              New Colors
            </Box>
            <Box
              color="light"
              bg="primary.base"
              width={{
                sm: '32px',
                md: '64px',
                lg: '128px',
              }}
              paddingTop={1}
              paddingBottom={4}
            >
              New Colors
            </Box>
          </div>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
