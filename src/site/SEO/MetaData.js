import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetaData = () => {
  const { site } = useStaticQuery(
    graphql`
      query Site_Metadata_Query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `
  )

  return site.useSiteMetaData
}

export default useSiteMetaData
