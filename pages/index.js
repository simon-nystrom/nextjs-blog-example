import styled from "styled-components"

const Main = styled.main`
  max-width: 56em;
  padding: 0.8em;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Main>
      <h1>Welcome!</h1>
      <p>This is the main page</p>
    </Main>
  )
}
