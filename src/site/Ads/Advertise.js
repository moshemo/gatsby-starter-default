import React from 'react'
import styled from 'styled-components'
import { colors } from 'Variables'
import { Button } from 'Elements'

const AdvertiseBase = styled.form`
  background: ${colors.dark};
  color: ${colors.light};
  line-height: 1.3;
  margin: 32px auto;
  padding: 0 0 32px;
  text-align: center;
  width: 250px;
`

const AdvertiseTitle = styled.div`
  background-color: ${colors.tertiaryDarker};
  color: ${colors.black};
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
  padding: 16px 16px;
`

const AdvertiseSubtitle = styled.div`
  color: ${colors.greyLighter};
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 16px;
  padding: 8px 16px;
`

export const Advertise = () => (
  <AdvertiseBase>
    <AdvertiseTitle>Advertise With Us</AdvertiseTitle>
    <AdvertiseSubtitle>
      Reach Over Four Hundred Thousand Businesses & Professionals
    </AdvertiseSubtitle>
    <Button bg="secondaryDarker">Learn More</Button>
  </AdvertiseBase>
)
