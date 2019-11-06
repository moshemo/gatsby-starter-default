import React from 'react'
import PropTypes from 'prop-types'

import { BaseLayout } from './base'
import { Grid } from './Grids/Grid'
import { Header } from './Header/Header'
import { ContentBase as Content } from './Content/ContentStyles'
import { MainSidebar as Sidebar } from './Sidebar/MainSidebar'
import { MainFooter as Footer } from './Footer/MainFooter'

import { Container } from 'Elements'

const MainLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <BaseLayout>
      <Header />
      <Container>
        <Grid>
          <Content>{children}</Content>
          <Sidebar />
        </Grid>
      </Container>
      <Footer />
    </BaseLayout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
