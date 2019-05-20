import React from 'react'

import Layout from '../components/layout'

import Box from '../components/Box'

const IndexPage = () => (
  <Layout>
    <Box
      color="light"
      bg="primary"
      width={{
        sm: 1 / 4,
        md: 1 / 2,
        lg: 1,
      }}
    >
      New Colors
    </Box>
    <h2>What does here?</h2>
  </Layout>
)

export default IndexPage
