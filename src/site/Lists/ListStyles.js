import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { color } from 'styled-system'
import { Avatar } from 'Elements'
import { colors, transitions } from 'Variables'

const listTransition = `0.3s ${transitions.swing}`

const ListAction = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 56px;

  & svg {
    align-items: center;
    color: ${colors.greyDarker};
    display: inline-flex;
    font-feature-settings: 'liga';
    font-size: 24px;
    justify-content: center;
    line-height: 1;
    transition: 0.3s ${listTransition};
    vertical-align: text-bottom;
  }
`

const ListAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 56px;

  ${Avatar} {
    height: 40px;
    width: 40px;
  }
`

const ListContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  text-align: left;

  ${ListAvatar} {
    justify-content: flex-end;
  }
`

const ListItemBase = css`
  align-items: center;
  color: inherit;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 100%;
  margin: 0;
  padding: 16px;
  position: relative;
  text-decoration: none;
  transition: background ${listTransition};

  :hover {
    background-color: ${colors.light};
  }

  ${props =>
    props.isAvatarRight &&
    css`
      ${ListAvatar} {
        justify-content: flex-end;
      }
    `}

  ${props =>
    props.isActionLeft &&
    css`
      ${ListAction} {
        justify-content: flex-start;
      }
    `}
`

const ListItemAnchor = styled.a`
  ${ListItemBase}

  cursor: pointer;
  user-select: none;
`

const ListItemLink = styled(Link)`
  ${ListItemBase}

  cursor: pointer;
  user-select: none;
`

const ListItemDiv = styled.div`
  ${ListItemBase}
`

export const ListSubheader = styled.div`
  align-items: center;
  color: ${colors.greyDarker};
  display: flex;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  padding: 0 16px;

  ${color}
`

const ListSubtitle = styled.div`
  color: ${colors.greyDarker};
  font-size: 13px;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  transition: ${listTransition};
  /* white-space: nowrap; */
  width: 100%;
`

const ListTitle = styled.div`
  height: 100%;
  line-height: 24px;
  /* overflow: hidden; */
  position: relative;
  text-align: left;
  /* text-overflow: ellipsis; */
  transition: ${listTransition};
  /* white-space: nowrap; */
  width: 100%;
`

export const ListBase = styled.div.attrs({
  role: 'list',
})`
  /* background-color: ${colors.white}; */
  color: ${colors.black};
  list-style-type: none;
  padding: 8px 12px;
  transition: ${listTransition};

  & > div {
    transition: inherit;
  }

  ${props =>
    props.borderBottom &&
    `
    border-bottom: 1px solid ${colors.greyLighter};
    margin-bottom: 18px;
    padding-bottom: 32px;
    `}

  /* ${ListItemAnchor} {
    ${props => props.twoLine && `height: 72px;`}
  }

  ${ListItemLink} {
    ${props => props.twoLine && `height: 72px;`}
  } */
`

export const ListItem = props => {
  let isAvatarRight = false
  let isActionLeft = false

  if (props.avatarRight) {
    isAvatarRight = true
  }
  if (props.actionLeft) {
    isActionLeft = true
  }

  let children = (
    <>
      {!props.avatarRight && props.avatar && (
        <ListAvatar>
          <Avatar>
            <img src={props.avatar} alt={props.title} />
          </Avatar>
        </ListAvatar>
      )}

      {props.actionLeft && props.action && (
        <ListAction>{props.action}</ListAction>
      )}
      <ListContent>
        {props.title && <ListTitle>{props.title}</ListTitle>}
        {props.subtitle && <ListSubtitle>{props.subtitle}</ListSubtitle>}
      </ListContent>
      {!props.actionLeft && props.action && (
        <ListAction>{props.action}</ListAction>
      )}

      {props.avatarRight && props.avatar && (
        <ListAvatar>
          <Avatar>
            <img src={props.avatar} alt={props.title} />
          </Avatar>
        </ListAvatar>
      )}
    </>
  )

  return (
    <div role="listitem">
      {props.goTo && (
        <ListItemLink
          isActionLeft={isActionLeft}
          isAvatarRight={isAvatarRight}
          to={props.goTo}
        >
          {children}
        </ListItemLink>
      )}
      {props.linkTo && (
        <ListItemAnchor
          isActionLeft={isActionLeft}
          isAvatarRight={isAvatarRight}
          href={props.linkTo}
        >
          {children}
        </ListItemAnchor>
      )}
      {!props.goTo && !props.linkTo && (
        <ListItemDiv isActionLeft={isActionLeft} isAvatarRight={isAvatarRight}>
          {children}
        </ListItemDiv>
      )}
    </div>
  )
}
