import React from 'react'
import styled from 'styled-components'
import useFormValidation from 'Forms/useFormValidation'
import {
  Blurb,
  Headline,
  Title,
  Container,
  ContactIcon as Icon,
} from 'Elements'
import { Field, FormButton } from 'Forms/FormStyles'
import { colors } from 'Variables'

import {
  FaRegEnvelope as Email,
  FaPhone as Phone,
  FaRegFileAlt as Fax,
} from 'react-icons/fa'

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 24px;
  margin: 24px 32px 130px;
`

const Contact = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 1px 8px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 25px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

const INITIAL_STATE = {
  email: '',
}

export const ContactForm = props => {
  const { handleChange, values } = useFormValidation(INITIAL_STATE)

  const handleSubmit = event => {
    event.preventDefault()
    console.log('authenticated', values.email)
  }

  return (
    <Container mt={'110px'}>
      <Title center>
        Three Ways to <b>Get In Touch</b>
      </Title>
      <Blurb center mb={50}>
        A subheadline goes here - speak to your customer
      </Blurb>
      <ContactGrid>
        <Contact>
          <Icon glyph={Email} screen="Email" />
          <Blurb>Email Us</Blurb>
          <Blurb bold black>
            address@email.com
          </Blurb>
        </Contact>
        <Contact>
          <Icon glyph={Phone} screen="Phone" />

          <Blurb>Call Us</Blurb>
          <Blurb bold black>
            +972 555-1111
          </Blurb>
        </Contact>
        <Contact>
          <Icon glyph={Fax} screen="Fax" />
          <Blurb>Fax Us</Blurb>
          <Blurb bold black>
            +972 555-1112
          </Blurb>
        </Contact>
      </ContactGrid>

      <Headline black thin center large>
        Or Just Send Us a Message
      </Headline>
      <Blurb center mb={50}>
        A subheadline goes here - speak to your customer
      </Blurb>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '800px', margin: '0 auto 110px' }}
      >
        <Field name="name" placeholder="Name" type="text" />
        <Field
          name="email"
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={values.email}
        />

        <Field textArea name="password" placeholder="Message" />

        <FormButton type="submit">Submit</FormButton>
      </form>
    </Container>
  )
}
