import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { space } from 'styled-system'
import {
  Container,
  Headline,
  Text,
  NewTitle as Title,
  IconGroup,
  // ListIcon,
  SocialIcon as Icon,
  Start,
  Middle,
  End,
  UL,
} from 'Elements'
import { Field as FieldBase, FormButton } from './Form/Styles'
import { breakpoints as bp, colors } from 'Variables'
// import { brands } from 'Helpers/brands'
import { CurrentYear } from 'Utilities'

import {
  FaAngleRight as Angle,
  FaFacebookF as Facebook,
  FaFlickr as Flickr,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
  FaPinterest as Pinterest,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
} from 'react-icons/fa'

const Footer = styled.footer`
  grid-area: footer;
`

const SignupFooter = styled.section`
  background-color: #333;
  padding-bottom: 100px;
  padding-top: 100px;
  text-align: center;
`

const SignupText = styled.div`
  margin-bottom: 30px;
`
const SignupForm = styled.form`
  margin: 0 auto;
  width: 60%;
`

const Field = styled(FieldBase)`
  background-color: ${colors.greyLighter};
`

const InputSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 14px;
`

const ContentFooter = styled.section`
  background-color: #222;
  color: ${colors.light};

  font-size: 17px;
  line-height: 1.6;
  padding-bottom: 50px;
  padding-top: 50px;

  ${Container} {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    grid-template-areas: 'start . middle . end';

    ${Start} {
      grid-area: start;
    }
    ${Middle} {
      grid-area: middle;
    }
    ${End} {
      grid-area: end;
    }

    @media (max-width: ${bp.md}) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'start end' 'middle middle';
    }
  }
`

export const LIBase = styled.li`
  display: flex;
  align-items: flex-start;

  color: green;
  font-size: 17px;
  font-weight: 100;

  :hover {
    /* span {
      color: ${colors.accent};
    } */
    svg {
      color: ${colors.accent};
    }
  }

  ${props =>
    props.hover &&
    `
    :hover { 
      span { 
        color: ${colors.accent}
        }
      }
    `}

  a {
    display: flex;
    align-items: flex-start;
  }

  span {
    font-size: 18px;
  }
  svg {
    color: ${colors.grey};
    font-size: 18px;
  }

  ${space}
`

const ListIcon = styled.span`
  width: 24px;
  flex-shrink: 0;
`

const LI = props => (
  <LIBase hover m="0" p="0">
    <Link to={props.goTo}>
      {props.icon && (
        <ListIcon>
          <Angle />
        </ListIcon>
      )}
      <Text as="span" grey thin>
        {props.text}
      </Text>
    </Link>
  </LIBase>
)

const ContactLI = props => (
  <LIBase my="18px">
    <Text as="span" greyDark thin>
      {props.text}
      <br />
      {props.text2}
    </Text>
  </LIBase>
)

const CopyFooter = styled.section`
  background-color: #111;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 2px;
  padding: 25px 10px;
  text-align: center;

  ${Text} {
    color: ${colors.greyDarker};
  }
`

export const MainFooter = props => (
  <Footer>
    <SignupFooter>
      <Container>
        <SignupText>
          <Title white small mb={15}>
            Signup for{' '}
            <b style={{ color: colors.accent }}>Our Free Newsletter </b>
            and Stay Up to Date
          </Title>
          <Text greyLighter large looser regular>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            semper vulputate tincidunt.
          </Text>
        </SignupText>
        <SignupForm>
          <InputSection>
            <Field
              tall
              label="Name"
              name="name"
              placeholder="Name"
              type="text"
            />
            <Field
              tall
              label="Name"
              name="email"
              placeholder="Email"
              type="email"
            />
          </InputSection>
          <FormButton type="submit">Signup Today!</FormButton>
        </SignupForm>
      </Container>

      {/* <Headline as="h4" sub2 white pb={10}>
        Follow us on social media
      </Headline>
      <Blurb as="h5" grey thinner pb={50}>
        Reach out to us and join the conversation
      </Blurb>
      <IconGroup>
        <Icon goTo="http://facebook.com" glyph={Facebook} screen="Facebook" />
        <Icon goTo="http://youtube.com" glyph={Youtube} screen="Youtube" />
        <Icon goTo="http://twitter.com" glyph={Twitter} screen="Twitter" />
        <Icon
          goTo="http://pinterest.com"
          glyph={Pinterest}
          screen="Pinterest"
        />
      </IconGroup> */}
    </SignupFooter>

    <ContentFooter>
      <Container>
        <Start>
          <Headline white small mb={15}>
            Browse the Site
          </Headline>
          <UL>
            <LI icon goTo="/" text="Home" />
            <LI icon goTo="/news" text="News" />
            <LI icon goTo="/about" text="About" />
            <LI icon goTo="/advertise" text="Advertise" />
            <LI icon goTo="/contact" text="Contact" />
          </UL>
        </Start>

        <Middle>
          {/* <SocialFooter> */}
          <Headline center small white mb={15}>
            Follow us on social media
          </Headline>
          {/* <Blurb as="h5" grey thinner pb={10}>
            Reach out to us and join the conversation
          </Blurb> */}
          <IconGroup>
            <Icon
              goTo="http://facebook.com"
              glyph={Facebook}
              screen="Facebook"
            />
            <Icon goTo="http://youtube.com" glyph={Youtube} screen="Youtube" />
            <Icon goTo="http://twitter.com" glyph={Twitter} screen="Twitter" />
            <Icon
              goTo="http://pinterest.com"
              glyph={Pinterest}
              screen="Pinterest"
            />
            <Icon goTo="http://linked.com" glyph={LinkedIn} screen="LinkedIn" />
            <Icon goTo="http://github.com" glyph={Github} screen="Github" />
            <Icon goTo="http://flickr.com" glyph={Flickr} screen="Flickr" />
            <Icon
              goTo="http://instagram.com"
              glyph={Instagram}
              screen="Instagram"
            />
          </IconGroup>
          {/* </SocialFooter> */}
          {/* <Headline white small mb={15}>
            Send Us a Message
          </Headline>
          <form>
            <Field label="Name" name="name" placeholder="Name" type="text" />
            <Field label="Name" name="email" placeholder="Email" type="email" />

            <Field
              textArea
              label="Message"
              name="message"
              placeholder="Message"
            />

            <FormButton type="submit">Send Your Message</FormButton>
          </form> */}
        </Middle>
        <End>
          <Headline white small mb={15}>
            Contact Us
          </Headline>
          <UL>
            <ContactLI text="Rechov Ploni 613" text2="Yerushalayim, Israel" />
            <ContactLI text="+972-800-888-1111" text2="+972-2-555-1111" />
            <ContactLI text="+mail@address.com" />
          </UL>
          {/* <Text left greyDark large thin pb="4px">
            Rechov Ploni 613
          </Text>
          <Text left greyDark large thin mb={15} pb="4px">
            Yerushalayim, Israel
          </Text> */}
          {/* <Text left greyDark large thin pb="4px">
            +972-800-888-1111
          </Text>
          <Text left greyDark large thin mb={15} pb="4px">
            +972-2-555-1111
          </Text>
          <Text left greyDark large thin pb="4px">
            +mail@address.com
          </Text> */}
        </End>
      </Container>
    </ContentFooter>

    <CopyFooter>
      <Text>
        Copyright © <CurrentYear /> Young Startup
      </Text>
    </CopyFooter>
  </Footer>
)
