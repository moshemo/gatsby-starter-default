import React from 'react'
import styled from 'styled-components'
import Lorem from 'react-lorem-component'
import {
  FaBullhorn as BannerAds,
  FaNewspaper as Classifieds,
  FaRegCalendarAlt as Events,
  FaMicrophoneAlt as PressRelease,
} from 'react-icons/fa'
import InnerLayout from 'Layouts/inner'
import {
  Button,
  Container,
  ContainerCSS,
  Icon,
  Text,
  Blurb,
  Headline,
  Title,
} from 'Elements'
import { colors } from 'Variables'

const Hero = styled.section`
  text-align: center;
`

const Plans = styled.section`
  ${ContainerCSS}
  padding: 0;

  margin-top: 70px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  grid-gap: 1px;
  background-color: ${colors.greyLight};
`

const Plan = styled.div`
  background-color: ${colors.offWhite};
  padding: 50px;
  text-align: center;

  svg {
    height: 64px;
    width: 64px;
    color: ${colors.primary};
  }

  ${Headline} {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 28px 0 4px;
  }

  ${Text} {
    color: ${colors.greyDarker};
    font-size: 18px;
    font-weight: 400;
    line-height: 2;
    margin: 0 auto;
    max-width: 330px;
  }

  ${Button} {
    background-color: transparent;
    border: 2px solid ${colors.primary};
    border-radius: 30px;
    color: ${colors.primaryDark};
    font-size: 15px;
    height: 50px;
    letter-spacing: 2px;
    line-height: 1;
    margin-top: 24px;
    padding: 0 28px;
    text-transform: uppercase;

    :hover {
      background-color: ${colors.primary};
      color: ${colors.light};
    }
  }
`

const AdvertisePage = () => (
  <InnerLayout>
    <Hero>
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
    </Hero>
    <Plans>
      <Plan>
        <Icon name={PressRelease} />
        <Headline>Press Releases</Headline>
        <Text>
          <Lorem count="1" sentenceUpperBound="7" />
        </Text>
        <Button>Learn More</Button>
      </Plan>
      <Plan>
        <Icon name={BannerAds} />
        <Headline>Banner Ads</Headline>
        <Text>
          <Lorem count="1" sentenceUpperBound="7" />
        </Text>
        <Button>Learn More</Button>
      </Plan>

      <Plan>
        <Icon name={Events} />
        <Headline>Events</Headline>
        <Text>
          <Lorem count="1" sentenceUpperBound="7" />
        </Text>
        <Button>Learn More</Button>
      </Plan>

      <Plan>
        <Icon name={Classifieds} />
        <Headline>Classifieds</Headline>
        <Text>
          <Lorem count="1" sentenceUpperBound="7" />
        </Text>
        <Button>Learn More</Button>
      </Plan>
    </Plans>
  </InnerLayout>
)

export default AdvertisePage
