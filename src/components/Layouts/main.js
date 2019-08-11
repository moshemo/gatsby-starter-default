import React from 'react'
import PropTypes from 'prop-types'

import { BaseLayout } from './base'
import { Grid } from './Grids/Grid'
import { Header } from './Header/Header'
import { ContentBase as Content } from './Content/ContentStyles'
import { MainSidebar as Sidebar } from './Sidebar/MainSidebar'
import { Footer } from './Footer/Footer'

// import { Container } from 'Elements'

const MainLayout = ({ children }) => {
  // const { title } = MetaData()

  return (
    <BaseLayout>
      <Grid>
        <Header />
        {/* <Container> */}
        <Content>{children}</Content>
        <Sidebar />
        {/* </Container> */}
        <Footer />
      </Grid>
    </BaseLayout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
