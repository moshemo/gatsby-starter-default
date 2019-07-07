import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Text } from 'Elements'
import MainLayout from 'Layouts/main'
import { colors } from 'Variables'
import {
  FaRegCalendarAlt as DateIcon,
  FaRegClock as TimeIcon,
  FaRegCommentDots as CommentsIcon,
  FaUser as AuthorIcon,
} from 'react-icons/fa'

// const Grid = styled.div`
//   display: grid;
//   grid-gap: 24px;
//   grid-template-columns: 60px 1fr 3fr 18px;
//   grid-template-rows: 70px 1fr;
//   grid-template-areas:
//     '. side headline .'
//     ' . side article . ';
//   margin-top: 24px;
// `

const Headline = styled.h1`
  font-size: 27px;
  font-weight: 700;
  grid-area: headline;
  letter-spacing: 0;
  line-height: 1.25;
  margin: 0 0 12px;
  text-align: center;
  text-transform: none;
  word-wrap: break-word;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`

// const Side = styled.div`
//   grid-area: side;

//   display: grid;
//   align-content: center;
//   justify-items: center;

//   background-color: ${colors.primary.lighter};
//   color: ${colors.light};
//   height: 200px;
//   margin-left: auto;
//   text-align: center;
//   width: 200px;

//   h3 {
//     font-size: 44px;
//   }

//   ${space}
// `

const Meta = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`

const MetaBase = styled.span`
  /* display: flex; */
  margin-right: 16px;

  a {
    display: flex;
    align-items: flex-start;
  }

  svg {
    color: ${colors.primaryLight};
    font-size: 14px;
  }

  .meta-item-icon {
    font-size: 14px;
  }

  ${Text} {
    color: ${colors.greyDarker};
    font-size: 13px;
    margin-left: 4px;
  }
`

const NoLink = styled.span`
  display: flex;
  align-items: flex-start;
`

const MetaItem = props => {
  let children = (
    <>
      <span className="meta-item-icon">
        <props.icon />
      </span>
      <Text as="span">{props.text}</Text>
    </>
  )
  return (
    <MetaBase>
      {props.goTo ? (
        <Link href={props.goTo}>{children}</Link>
      ) : (
        <NoLink>{children}</NoLink>
      )}
    </MetaBase>
  )
}

const ArticleInner = styled.article`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  margin: 0 auto;
  padding: 0;

  p {
    margin-bottom: 28px;
  }
`

const Article = ({ children }) => (
  <ArticleBase>
    <ArticleInner>{children}</ArticleInner>
  </ArticleBase>
)

const ArticleLink = styled.a`
  color: ${colors.primary.base};

  :hover {
    ${colors.primary.dark};
  }
`

const DemoPage = () => (
  <MainLayout>
    <Headline>
      Tesla’s New HW3 Self-Driving Computer — It’s A Beast (CleanTechnica Deep
      Dive)
    </Headline>

    <Meta>
      <MetaItem goTo="/" icon={AuthorIcon} text="Ploni Almoni" />
      <MetaItem goTo="/" icon={DateIcon} text="June 7 , 2019" />
      <MetaItem icon={TimeIcon} text="10:39 am" />
      <MetaItem goTo="/" icon={CommentsIcon} text="7 Comments" />
    </Meta>

    <Article>
      <p>
        A month ago, Tesla revealed several secrets regarding the new chip the
        Silicon Valley company has designed for full self-driving capability.
        Nonetheless, some of the people making that presentation may have failed
        to take into account that not everyone is fully literate in
        microprocessor design and engineering. I don't fall into that category
        either, but I have been a computer enthusiast for quite some time and
        know a few things that might help me pick out some of the highlights,
        point out why they are so exciting, and further communicate how Tesla
        really is way ahead of the competition
      </p>

      <ArticleLink>Read More &raquo;</ArticleLink>
    </Article>
  </MainLayout>
)

const ArticleBase = styled.article`
  border: 0;
  font: inherit;
  font-size: 14px;
  grid-area: article;
  line-height: 28px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export default DemoPage
