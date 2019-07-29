import React from 'react'
import styled from 'styled-components'

import { Button as HeroButton, Container, Text, Title, Blurb } from 'Elements'

import { colors } from 'Variables'

const HeroBase = styled.section`
  background-color: ${colors.light};

  margin-top: -75px;
  margin-bottom: 50px;
  padding: 75px;
  text-align: center;

  svg {
    height: 256px;
    width: 256px;
    fill: ${colors.primaryDark};
  }
`

const Button = styled(HeroButton)`
  background-color: ${colors.accent};
  border: 5px solid ${colors.accent};
  border-radius: 0;
  color: ${colors.light};
  font-size: 15px;
  font-weight: 600;
  height: 50px;
  letter-spacing: 2px;
  line-height: 1;
  margin: 24px 0 0;
  padding: 0 28px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 240px;

  :hover {
    background-color: ${colors.dark};
    border-color: ${colors.dark};
    color: ${colors.white};
  }
`

export const Hero = () => (
  <HeroBase>
    <Container>
      <Text primary uppercase widest>
        Place Your Order
      </Text>
      <Title pt={12} pb={'7px'}>
        Events
      </Title>
      <Title as="div" bold small pb={10}>
        $180.00
      </Title>
      <Blurb greyDarker mx={170}>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      </Blurb>
      <Button>Add to Cart</Button>
    </Container>
  </HeroBase>
)
