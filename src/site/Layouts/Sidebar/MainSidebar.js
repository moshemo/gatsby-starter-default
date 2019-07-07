import React from 'react'
import {
  SidebarBase as Sidebar,
  SidebarTop,
  SidebarBottom,
} from './SidebarStyles'
import { Advertise, Signup } from 'Ads'
import { Divider, Search } from 'Elements'
import { SidebarList as List } from 'Lists'

export const MainSidebar = props => (
  <Sidebar>
    <SidebarTop>
      <Search />
    </SidebarTop>

    <SidebarBottom>
      <Signup />

      <List />

      <Divider />

      <Advertise />
    </SidebarBottom>
  </Sidebar>
)
