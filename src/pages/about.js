import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import InnerLayout from 'Layouts/inner'
import {
  Blurb,
  Headline,
  Text,
  // Title,
  Container,
  AboutVideo as VideoPlayer,
} from 'Elements'
import { colors } from 'Variables'
import { FaRegLightbulb as LightBulb, FaSun as Sun } from 'react-icons/fa'

const HeroBase = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  margin-bottom: 30px;
`

const HeroArticle = styled.article`
  margin: 50px 60px 50px 0;
`

const HeroVideo = styled.div``

export const Hero = props => (
  <HeroBase>
    <HeroArticle>
      <Blurb bold primary uppercase mb={10}>
        What We Do
      </Blurb>
      <Headline bolder large mb={20}>
        We sift through the most important business news in bio-tech for
        business leaders who want to stay in the know.
      </Headline>
      <Blurb>
        A few more lines with detail on how what your company does brings these
        benefits to your target market.
      </Blurb>
    </HeroArticle>
    <HeroVideo>
      <VideoPlayer />
    </HeroVideo>
  </HeroBase>
)

const OurTeam = styled.section`
  padding-top: 110px;

  ${Container} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-gap: 12px;
  }

  ${Blurb} {
    color: ${colors.primary};
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${colors.black};
`

const OverlayContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 370px;

  :hover ${Overlay} {
    opacity: 0.8;
  }
`

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  ${Headline}, ${Text} {
    color: ${colors.light};
  }

  ${Headline} {
    font-weight: 700;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  ${Text} {
    font-weight: 500;
    text-transform: uppercase;
  }
`

const OverlayImage = styled(Img)`
  display: block;
  max-width: 370px;
  width: 100%;
  height: auto;
`

const Profile = props => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 370, maxHeight: 470) {
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
    <OverlayContainer>
      <OverlayImage alt={props.title} fluid={imageName.node.fluid} />
      <Overlay>
        <OverlayText>
          <Headline small>{props.title}</Headline>
          <Text small>{props.desc}</Text>
        </OverlayText>
      </Overlay>
    </OverlayContainer>
  )
}

const OurValues = styled.section`
  padding-top: 110px;

  ${Container} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 50px;
  }

  ${Blurb} {
    color: ${colors.primary};
  }
`

const IconBoxBase = styled.div`
  color: ${colors.grey};

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;

  text-align: center;

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

  /* path {
    ${props => props.id && `fill: url(#${props.id})`};
  } */
`

export const IconBox = props => (
  <IconBoxBase {...props}>
    <span>
      <props.icon style={{ fontWeight: 300, paddingBottom: '12px' }} />
    </span>
    <Text bold small uppercase pb={15}>
      {props.headline}
    </Text>
    <Text greyDark loosest>
      {props.text}
    </Text>
  </IconBoxBase>
)

const AboutPage = () => (
  <>
    <InnerLayout>
      <Container>
        <Hero />
        <section>
          <Blurb bold center primary uppercase mt={110}>
            Our Story
          </Blurb>
          <Headline bolder center large mb={30}>
            It All Started with <b>an Idea</b>
          </Headline>
          <Text columns="3" large thin mb={50}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et finibus est. Cras elit justo, tempus non diam ac,
            semper consequat sem. Nullam nec molestie ligula. Mauris consequat
            dui in magna varius, sit amet scelerisque metus vestibulum. Proin
            nulla tortor, vestibulum vel condimentum vitae, aliquam nec ante.
            Phasellus ut lorem fermentum, lobortis velit ac, eleifend urna. Ut
            placerat velit fermentum, rhoncus libero nec, mattis urna. Proin nec
            porta odio. Curabitur metus mi, cursus eget purus sed, fermentum
            pellentesque tellus. Maecenas quis neque at odio vestibulum
            volutpat. Aliquam erat volutpat.
          </Text>
        </section>
      </Container>

      <OurTeam>
        <Blurb bold center uppercase>
          Our Team
        </Blurb>
        <Headline bolder center large mb={30}>
          Meet the People Who Make It All Happen
        </Headline>
        <Container>
          <Profile image="reagan.jpg" title="Ronald Reagan" desc="President" />
          <Profile
            image="bush-senior.jpg"
            title="George H. W. Bush"
            desc="President"
          />
          <Profile image="clinton.jpg" title="Bill Clinton" desc="President" />

          <Profile
            image="bush-junior.jpg"
            title="George W. Bush"
            desc="President"
          />
          <Profile image="obama.jpg" title="Barack Obama" desc="President" />
          <Profile image="trump.jpg" title="Donald Trump" desc="President" />
        </Container>
      </OurTeam>

      <OurValues>
        <Blurb bold center primary uppercase mt={110}>
          Our Values
        </Blurb>
        <Headline bolder center large mb={60}>
          The Ideas and Principles Behind <b>Everything We Do</b>
        </Headline>
        <Container>
          {/* <IconGradient
            id="svg-icon-gradient"
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
          >
            <Stop offset="0%" color={colors.primary} />
            <Stop offset="100%" color={colors.tertiaryDark} />
          </IconGradient> */}
          <IconBox
            id="svg-icon-gradient"
            icon={LightBulb}
            headline="Headline"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
          />
          <IconBox
            id="svg-icon-gradient"
            icon={Sun}
            headline="Headline"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
          />
          <IconBox
            id="svg-icon-gradient"
            icon={LightBulb}
            headline="Headline"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
          />

          <IconBox
            id="svg-icon-gradient"
            icon={Sun}
            headline="Headline"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
          />
          <IconBox
            id="svg-icon-gradient"
            icon={LightBulb}
            headline="Headline"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
          />
          <IconBox
            id="svg-icon-gradient"
            icon={Sun}
            headline="Headline"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
          />
        </Container>
      </OurValues>
    </InnerLayout>
  </>
)

export default AboutPage
