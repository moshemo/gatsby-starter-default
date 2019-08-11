import React from 'react'

import { FooterBase } from './FooterStyles'
import { Container, Text } from 'Elements'
import { CurrentYear } from 'Utilities'

export const Footer = () => (
  <FooterBase>
    <Container>
      <Text>
        Copyright © <CurrentYear /> Young Startup
      </Text>
    </Container>
  </FooterBase>
)
