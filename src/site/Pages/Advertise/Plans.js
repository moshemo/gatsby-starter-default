import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Lorem from 'react-lorem-component'

import {
  FaBullhorn as BannerAds,
  FaNewspaper as Classifieds,
  FaRegCalendarAlt as Events,
  FaMicrophoneAlt as PressRelease,
} from 'react-icons/fa'

import { Button, ContainerCSS, Icon, Text, Title } from 'Elements'

import { colors } from 'Variables'

const PlanWrapper = styled.section`
  ${ContainerCSS}
  padding: 0;

  margin-top: 70px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  grid-gap: 1px;
  background-color: ${colors.greyLight};
`

const PlanBase = styled.div`
  background-color: ${colors.offWhite};
  padding: 50px;
  text-align: center;

  svg {
    height: 64px;
    width: 64px;
    color: ${colors.primary};
  }

  ${Title} {
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

      a {
        color: ${colors.light};
        font-weight: bold;
      }
    }
  }
`

const Plan = props => (
  <PlanBase>
    <Icon name={props.icon} />
    <Title>{props.title}</Title>
    <Text>{props.text}</Text>
    <Button>
      <Link to={`/advertise/${props.goTo}`}>Learn More</Link>
    </Button>
  </PlanBase>
)

export const Plans = () => (
  <PlanWrapper>
    <Plan
      icon={PressRelease}
      title="Press Releases"
      text="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="press-releases"
    />

    <Plan
      icon={BannerAds}
      title="Banner Ads"
      text="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="banner-ads"
    />

    <Plan
      icon={Events}
      title="Events"
      text="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="events"
    />

    <Plan
      icon={Classifieds}
      title="Classifieds"
      text="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="classifieds"
    />
  </PlanWrapper>
)
