import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Lorem from 'react-lorem-component'

import styled from 'styled-components'

import { Container, StyledDivider, Text, NewTitle as Title } from 'Elements'

import { colors } from 'Variables'

const FeatureSection = styled.div``

const InfoBoxBase = styled.section`
  :nth-child(even) {
    background-color: ${colors.light};
  }
  color: ${colors.grey};

  margin: 0 auto;
  padding: 55px 20px 50px 20px;

  ${Container} {
    display: grid;
    grid-template-columns: ${props =>
      props.imageRight ? '3fr 2fr' : '2fr 3fr'};
    align-items: center;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${colors.greyLight};
    border-radius: 50em;

    height: 125px;
    width: 125px;

    margin-bottom: 25px;
  }

  svg {
    height: 50px;
    width: 50px;
    padding-bottom: 0 !important;
    fill: ${colors.primary};
  }

  path {
    ${props => props.id && `fill: url(#${props.id})`};
  }
`

const ImageSection = styled.div`
  display: grid;
  justify-items: center;
`

const InfoImage = styled(Img)`
  display: block;
  height: auto;
  max-height: 256px;
  width: 100%;
  max-width: 256px;
`

const ContentSection = styled.div``

const InfoBox = props => {
  const data = useStaticQuery(graphql`
    query AdImageQuery {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const imageName = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === props.image
  )

  return (
    <InfoBoxBase {...props}>
      <Container>
        {!props.imageRight && (
          <ImageSection>
            <InfoImage alt={props.alt} fluid={imageName.node.fluid} />
          </ImageSection>
        )}
        <ContentSection>
          <Title small regular>
            <b>{props.headlineStart}</b> {props.headlineEnd}
          </Title>
          <StyledDivider thickness={5} width={150} my={20} />
          <Text greyDarker large loosest regular>
            {props.text}
          </Text>
        </ContentSection>
        {props.imageRight && (
          <ImageSection>
            <InfoImage alt={props.alt} fluid={imageName.node.fluid} />
          </ImageSection>
        )}
      </Container>
    </InfoBoxBase>
  )
}

export const Featured = () => (
  <FeatureSection>
    <InfoBox
      image="ad-image-3.png"
      alt="Ad Image 3"
      headlineStart="Write a Compelling Headline"
      headlineEnd="that Will Speak to Your Customers"
      text={<Lorem count="1" />}
    />
    <InfoBox
      imageRight
      image="ad-image-2.png"
      alt="Ad Image 2"
      headlineStart="Write a Compelling Headline"
      headlineEnd="that Will Speak to Your Customers"
      text={<Lorem count="1" />}
    />
    <InfoBox
      image="ad-image-1.png"
      alt="Ad Image 1"
      headlineStart="Write a Compelling Headline"
      headlineEnd="that Will Speak to Your Customers"
      text={<Lorem count="1" />}
    />
  </FeatureSection>
)
