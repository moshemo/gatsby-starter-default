import React from 'react'
import styled from 'styled-components'
import Lorem from 'react-lorem-component'

import { ContainerCSS, StyledDivider, Text, Title } from 'Elements'

import { colors } from 'Variables'

const FaqSectionBase = styled.section`
  ${ContainerCSS}

  margin-top: 110px;
  text-align: center;

  ${Title} {
    font-size: 30px;
  }
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

export const FaqSection = () => (
  <FaqSectionBase>
    <Text greyDarker uppercase widest>
      Do You Have Any Questions?
    </Text>
    <Title regular pt={'6px'} pb={10}>
      <b>Frequently</b> Asked Questions
    </Title>
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
  </FaqSectionBase>
)

export const FAQTest = () => <h2>Test (faq)</h2>
