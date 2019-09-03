import React from 'react'

// import { Input, Password, Select, Textarea } from 'Components/Forms'
import { Input } from 'Components/Forms/Input2'
import { MainLayout } from 'Layouts'

const HomePage = () => (
  <MainLayout>
    <h1>Home</h1>
    <form>
      <Input label="Name" placeholder="Name" />
      <Input label="Email" placeholder="Email" type="email" />
    </form>
  </MainLayout>
)

export default HomePage
