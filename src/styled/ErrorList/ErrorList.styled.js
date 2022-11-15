import styled from 'styled-components'

const DefaultSErrorList = styled.ul`
  margin: 0.375rem;
  padding: 0.625rem 0.375rem;
  background-color: white;
  border-radius: 0.5rem;
  box-sizing: border-box;
  flex-basis: 100%;
  list-style: none;
`

const SErrorList = styled(DefaultSErrorList)(({ style }) => style)

export default SErrorList
