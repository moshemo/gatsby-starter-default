// import React, { useState } from 'react'

// import { firebase } from 'Class'
// import { Button, Flex } from 'Components'
// import { useForms } from 'Hooks'
// import { MainLayout } from 'Layouts'

// const INITIAL_STATE = {
//   signUpName: '',
//   signUpEmail: '',
//   signUpPassword: '',
// }

// const SignUpPage = () => {
//   const { handleChange, handleSubmit, values } = useForms(
//     INITIAL_STATE,
//     authenticateUser
//   )
//   const [authError, setAuthError] = useState(null)

//   async function authenticateUser() {
//     const { signUpName, signUpEmail, signUpPassword } = values
//     try {
//       await firebase.register(signUpName, signUpEmail, signUpPassword)
//     } catch (error) {
//       console.log('Authentication erroror: ', error)
//       setAuthError(error.message)
//     }
//   }
//   return (
//     <MainLayout>
//       <h1>SignUp</h1>
//       <form onSubmit={handleSubmit}>
//         <Flex column>
//           <input
//             autoComplete="off"
//             name="signUpName"
//             onChange={handleChange}
//             placeholder="Name..."
//             type="text"
//             value={values.signUpName}
//           />
//           <input
//             autoComplete="off"
//             name="signUpEmail"
//             onChange={handleChange}
//             placeholder="Email..."
//             type="email"
//             value={values.signUpEmail}
//           />
//           {/* {authError && <p>{authError}</p>} */}
//           <input
//             name="signUpPassword"
//             onChange={handleChange}
//             placeholder="Password..."
//             type="password"
//             value={values.signUpPassword}
//           />
//           {authError && <p>{authError}</p>}
//           <Button type="submit">Submit</Button>
//         </Flex>
//       </form>
//     </MainLayout>
//   )
// }

// export default SignUpPage
