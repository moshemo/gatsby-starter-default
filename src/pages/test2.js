import React from 'react'

import { MainLayout } from 'Layouts'
import { SignUpForm } from 'SRC/forms/signup'
import { TestFormikForm } from 'SRC/forms/test2'
import { TestBulmaForm } from 'SRC/forms/testBulma'

export const Test2cPage = props => {
  return (
    <MainLayout>
      {/* <SignUpForm /> */}
      {/* <TestFormikForm /> */}
      <TestBulmaForm />
    </MainLayout>
  )
}

export default Test2cPage
