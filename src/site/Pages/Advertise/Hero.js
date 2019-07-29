import React from 'react'
import styled from 'styled-components'
import Lorem from 'react-lorem-component'

import { Container, Text, Blurb, Title } from 'Elements'

const HeroBase = styled.section`
  text-align: center;
`

export const Hero = () => (
  <HeroBase>
    <Container>
      <Text primary uppercase widest>
        Find New Customers
      </Text>
      <Title pb={10}>
        <b>Advertise</b> with Us
      </Title>
      <Blurb greyDarker mx={170}>
        <Lorem count="1" />
      </Blurb>
    </Container>
  </HeroBase>
)
