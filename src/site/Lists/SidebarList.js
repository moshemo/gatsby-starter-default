import React from 'react'
import { Divider } from 'Elements'
import {
  ListBase as List,
  ListItem as Item,
  ListSubheader as Header,
} from './ListStyles'

export const SidebarList = props => (
  <>
    <List>
      <Header>Most Popular</Header>
      <Item
        goTo="/"
        title="This is the Title of the Article"
        subtitle="And here is a short blurb about the article"
        // action={<Newspaper />}
      />

      <Item
        goTo="/"
        title="Here is a really long title of an article that may or may not also be really long"
        subtitle="And the blurb here is also rather long -- indeed, really rather long."
        // action={<PlayCircle />}
      />

      <Item
        goTo="/"
        title="And here is a third article - with a medium headline."
        subtitle="And this is the goldilocks blurb -- just right"
        // action={<Podcast />}
      />
    </List>

    <Divider />

    <List>
      <Header>Latest News</Header>
      <Item
        goTo="/"
        title="This is the Title of the Article"
        subtitle="And here is a short blurb about the article"
        // action={<Newspaper />}
      />

      <Item
        goTo="/"
        title="Here is a really long title of an article that may or may not also be really long"
        subtitle="And the blurb here is also rather long -- indeed, really rather long."
        // action={<PlayCircle />}
      />

      <Item
        goTo="/"
        title="And here is a third article - with a medium headline."
        subtitle="And this is the goldilocks blurb -- just right"
        // action={<Podcast />}
      />
    </List>
  </>
)
