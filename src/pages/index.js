import React from 'react'

import { Input, Textarea } from 'Components/Forms'
import { MainLayout } from 'Layouts'

const HomePage = () => (
  <MainLayout>
    <h1>Home</h1>
    <Input placeholder="Enter your name..." />
    <Input color="accent" fontSize="xl" />
    <Input fontSize="xs" />
    <Input />
    <Input rounded />
    <Input static />
    <Input focus />
    <Textarea />
    <Textarea fixed />
  </MainLayout>
)

export default HomePage
