import styled from 'styled-components'
import { colors } from 'Variables'

export const SidebarBase = styled.div`
  grid-area: sidebar;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;

  grid-template-areas:
    'sidebar-top'
    /* 'sidebar-middle' */
    'sidebar-bottom';

  background-color: ${colors.light};
  margin-top: 75px;
  margin-bottom: 75px;

  min-height: 100vh;
`

export const SidebarTop = styled.div`
  grid-area: sidebar-top;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.greyLighter};
  /* border-bottom: 1px solid ${colors.primary.lighter}; */
`

export const SidebarBottom = styled.div`
  grid-area: sidebar-bottom;

    background-color: ${colors.light};
  /* border-top: 1px solid ${colors.grey.light}; */
`
