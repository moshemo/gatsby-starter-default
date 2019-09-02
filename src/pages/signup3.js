// import React from 'react'

// import { Button, Flex } from 'Components'
// import { useForms } from 'Hooks'
// import { MainLayout } from 'Layouts'

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   password: '',
// }

// const SignUpPage = () => {
//   const { handleChange, handleSubmit, values } = useForms(INITIAL_STATE)

//   return (
//     <MainLayout>
//       <h1>SignUp</h1>
//       <form onSubmit={handleSubmit}>
//         <Flex column>
//           <input
//             autoComplete="off"
//             name="name"
//             onChange={handleChange}
//             placeholder="Name..."
//             type="text"
//             value={values.name}
//           />
//           <input
//             autoComplete="off"
//             name="email"
//             onChange={handleChange}
//             placeholder="Email..."
//             type="email"
//             value={values.email}
//           />
//           <input
//             name="password"
//             onChange={handleChange}
//             placeholder="Password..."
//             type="password"
//             value={values.password}
//           />
//           <Button type="submit">Submit</Button>
//         </Flex>
//       </form>
//     </MainLayout>
//   )
// }

// export default SignUpPage
