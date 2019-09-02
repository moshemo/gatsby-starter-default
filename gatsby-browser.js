import React from 'react'
import { FirebaseProvider } from './src/utilities/context/firebase-context'
console.log(FirebaseProvider)
export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>{element}</FirebaseProvider>
)

require('typeface-roboto')
