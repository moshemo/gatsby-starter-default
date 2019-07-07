import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-areas: 'main sidebar';
  /* grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    'header header'
    'main sidebar '
    'footer footer';
  min-height: 100vh; */
`

// export const InnerGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 60px 1fr 60px;
//   grid-template-areas:
//     'header'
//     'main '
//     'footer';
//   /* min-height: 100vh; */
// `

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0;
  margin: 0 32px;
`
