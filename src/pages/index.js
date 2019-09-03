import React from 'react'

// import { Input, Password, Select, Textarea } from 'Components/Forms'
// import * as Input from 'Components/Forms/Input'
import {
  Form,
  Input,
  Email,
  Date,
  Hidden,
  Month,
  Number,
  Password,
  Search,
  Tel,
  Time,
  URL,
  Week,
  Color,
  File,
  Image,
  Range,
  Textarea,
} from 'Components/Forms'
import { MainLayout } from 'Layouts'

const HomePage = () => (
  <MainLayout>
    <h1>Home</h1>
    <Form columns>
      <Input forId="test3" label="Test 1" placeholder="Test 1" />
      <Input label="Name" placeholder="Name" />
      <Input label="Name" placeholder="Name" />
      <Input label="Name" message="Here is a message." placeholder="Name" />
      <Textarea placeholder="Write something great..." />
      <Textarea fullWidth placeholder="Write something great..." />
      <Input
        error
        label="Name"
        message="Here is a message."
        placeholder="Name"
      />
      <Input
        info
        label="Name"
        message="Here is a message."
        placeholder="Name"
      />
      <Input
        success
        label="Name"
        message="Here is a message."
        placeholder="Name"
      />
      <Input
        warning
        label="Name"
        message="Here is a message."
        placeholder="Name"
      />
      <Email label="Email" placeholder="Color" />
      <Date label="Date" placeholder="Date" />
      <Color label="Color" placeholder="Color" />
      <File label="File" placeholder="File" />
      <Image label="Image" placeholder="Image" />
      <Range label="Range" placeholder="Range" />
      <Hidden />
      <Month label="Month" placeholder="Month" />
      <Number label="Number" placeholder="Number" />
      <Password label="Password" placeholder="Password" />
      <Search label="Search" placeholder="Search" />
      <Tel label="Tel" placeholder="Tel" />
      <Time label="Time" placeholder="Time" />
      <URL label="URL" placeholder="URL" />
      <Week label="Week" placeholder="Week" />
    </Form>
  </MainLayout>
)

export default HomePage
