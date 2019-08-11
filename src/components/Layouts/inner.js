import React from 'react'
import PropTypes from 'prop-types'
import { BaseLayout as Layout } from './base'
import { Header } from './Header/Header'
import { ContentBase as Content } from './Content/ContentStyles'
import { MainFooter as Footer } from './Footer/MainFooter'

const InnerLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

InnerLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InnerLayout
