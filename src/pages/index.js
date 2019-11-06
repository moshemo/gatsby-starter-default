import React from 'react'
// import { graphql } from 'gatsby'

import MainLayout from 'Layouts/main'
import { HomeList } from 'Lists'

// export const query = graphql`
//   {
//     wordpress {
//       articles {
//         edges {
//           node {
//             articleMeta {
//               articleFeatured
//             }
//             articleContent {
//               articleTitle
//               articleExcerpt
//             }
//           }
//         }
//       }
//     }
//   }
// `

const IndexPage = () => {
  return (
    <MainLayout>
      <HomeList />
    </MainLayout>
  )
}

export default IndexPage
