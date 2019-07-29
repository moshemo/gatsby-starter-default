import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Lorem from 'react-lorem-component'

import HeroBackground from 'Images/hero-background.svg'
import {
  FaChartLine as LineChart,
  FaRegFileAlt as File,
  FaUsers as Users,
} from 'react-icons/fa'

import InnerLayout from 'Layouts/inner'
import {
  Button as HeroButton,
  Container,
  ContainerCSS,
  Flex,
  StyledDivider,
  Text,
  Headline,
  NewTitle as Title,
} from 'Elements'
import { colors } from 'Variables'

const Hero = styled.section`

  background-color: ${colors.light};
  /* background-image: url(${HeroBackground}); */

  margin-top: -75px;
  padding: 75px;

  text-align: center;

  /* svg {
    height: 256px;
    width: 256px;
    fill: ${colors.primaryDark};
  } */
`

// const HeroContent = styled.div``

// const HeroPrice = styled.div``

const Form = styled.form`
  /* border: 3px solid ${colors.light}; */
  /* border-radius: 5px; */
  margin: 0 auto;
  padding: 47px 37px;
  width: 60%;
`

const InputSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 14px;
`

const Input = styled.input`
  background-color: ${colors.white};
  color: ${colors.dark};

  font-size: 16px;
  font-weight: normal;

  border: 1px solid ${colors.greyLight};
  border-radius: 4px;

  min-height: 47px;
  padding: 6px 16px;

  :focus {
    background-color: ${colors.tertiaryLighter};
    border-color: ${colors.grey};
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
  transition: all 0.5s ease-in-out;
  width: 100%;

  :hover {
    background-color: ${colors.accent};
    border-color: ${colors.accentLight};
    /* color: ${colors.dark}; */
    /* transform: scale(1.05); */
  }
`

const StatSection = styled.section`
  background-color: ${colors.primary};
  color: ${colors.light};
  padding: 40px 0 40px 10px;
`

const StatGroup = styled(Flex)`
  align-items: center;
`

const StatIcon = styled(Flex)`
  background-color: ${colors.light};
  color: ${colors.primary};

  border-radius: 50%;

  align-items: center;
  justify-content: center;

  height: 70px;
  width: 70px;

  margin-right: 15px;

  svg {
    height: 35px;
    width: 35px;
  }
`

const StatText = styled.div`
  ${Text} {
    color: ${colors.light};
    line-height: 1.6;
  }
`

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
    query AdImageQuery2 {
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
          <Headline large regular>
            <b>{props.headlineStart}</b> {props.headlineEnd}
          </Headline>
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

const FaqSection = styled.section`
  ${ContainerCSS}

  margin-top: 110px;
  text-align: center;
`

const FAQs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(47%, 1fr));
  grid-gap: 48px;

  margin-top: 30px;
  text-align: left;
`

const FaqBase = styled.div`
  border-bottom: 1px solid ${colors.greyLight};
  padding: 0 10px 48px;

  :nth-last-child(-n + 2) {
    border-bottom: none;
  }
`

const FAQ = props => (
  <FaqBase>
    <Text black bold pb={10}>
      {props.question}
    </Text>
    <Text greyDarker looser regular>
      {props.answer}
    </Text>
  </FaqBase>
)

const Newsletter = () => (
  <InnerLayout>
    <Hero>
      <Container>
        <Title as="h2" accent bold small>
          Get the Latest News Directly to Your In-Box
        </Title>
        <Title as="h1" dark normal small pb={25}>
          Signup for Our Newsletter & Stay Up to Date
        </Title>
        <Text greyDarker looser style={{ width: '50%', margin: '0 auto' }}>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        </Text>
        <Form>
          <InputSection>
            <Input name="name" placeholder="Name" />
            <Input name="email" placeholder="Email" />
          </InputSection>
          <Button>Signup Today!</Button>
        </Form>
      </Container>
    </Hero>

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
    <StatSection>
      <Container>
        <Flex justify="evenly">
          <StatGroup wrap>
            <StatIcon>
              <LineChart />
            </StatIcon>
            <StatText>
              <Text bolder large>
                Title Goes Here
              </Text>
              <Text thin>And here is a short blurb</Text>
            </StatText>
          </StatGroup>
          <StatGroup wrap>
            <StatIcon>
              <File />
            </StatIcon>
            <StatText>
              <Text bolder large>
                Title Goes Here
              </Text>
              <Text thin>And here is a short blurb</Text>
            </StatText>
          </StatGroup>
          <StatGroup wrap>
            <StatIcon>
              <Users />
            </StatIcon>
            <StatText>
              <Text bolder large>
                Title Goes Here
              </Text>
              <Text thin>And here is a short blurb</Text>
            </StatText>
          </StatGroup>
        </Flex>
      </Container>
    </StatSection>
    <FaqSection>
      <Text greyDarker uppercase widest>
        Do You Have Any Questions?
      </Text>
      <Headline regular pt={'6px'} pb={10}>
        <b>Frequently</b> Asked Questions
      </Headline>
      <StyledDivider center thickness="3" mt={24} mb={38} />
      <FAQs>
        <FAQ
          question={
            <Lorem
              count="1"
              seed="1"
              sentenceLowerBound="4"
              sentenceUpperBound="8"
              paragraphUpperBound="1"
            />
          }
          answer={<Lorem count="1" seed="1" paragraphUpperBound="5" />}
        />
        <FAQ
          question={
            <Lorem
              count="1"
              seed="2"
              sentenceLowerBound="4"
              sentenceUpperBound="8"
              paragraphUpperBound="1"
            />
          }
          answer={<Lorem count="1" seed="2" paragraphUpperBound="5" />}
        />
        <FAQ
          question={
            <Lorem
              count="1"
              seed="3"
              sentenceLowerBound="4"
              sentenceUpperBound="8"
              paragraphUpperBound="1"
            />
          }
          answer={<Lorem count="1" seed="3" paragraphUpperBound="5" />}
        />
        <FAQ
          question={
            <Lorem
              count="1"
              seed="4"
              sentenceLowerBound="4"
              sentenceUpperBound="8"
              paragraphUpperBound="1"
            />
          }
          answer={<Lorem count="1" seed="4" paragraphUpperBound="5" />}
        />
        <FAQ
          question={
            <Lorem
              count="1"
              seed="5"
              sentenceLowerBound="4"
              sentenceUpperBound="8"
              paragraphUpperBound="1"
            />
          }
          answer={<Lorem count="1" seed="5" paragraphUpperBound="5" />}
        />
        <FAQ
          question={
            <Lorem
              count="1"
              seed="6"
              sentenceLowerBound="4"
              sentenceUpperBound="8"
              paragraphUpperBound="1"
            />
          }
          answer={<Lorem count="1" seed="6" paragraphUpperBound="5" />}
        />
      </FAQs>
    </FaqSection>
  </InnerLayout>
)

export default Newsletter
