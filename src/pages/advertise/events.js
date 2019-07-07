import React from 'react'
import styled from 'styled-components'
import Lorem from 'react-lorem-component'
import InnerLayout from 'Layouts/inner'
import { Container, Text, Blurb, Headline, Title } from 'Elements'

const Hero = styled.section`
  text-align: center;
`

const Events = () => (
  <InnerLayout>
    <Container>
      <Hero>
        <Text primary uppercase widest>
          Find New Customers
        </Text>
        <Title pb={10}>
          <b>Press</b> Releases
        </Title>
        <Blurb greyDarker mx={170}>
          <Lorem count="1" />
        </Blurb>
      </Hero>
    </Container>
  </InnerLayout>
)

export default Events
