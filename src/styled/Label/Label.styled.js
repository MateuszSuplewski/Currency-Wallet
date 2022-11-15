import styled from 'styled-components'

const DefaultSLabel = styled.label`
  padding: 0.25rem;
  flex-basis: 50%;
`

const SLabel = styled(DefaultSLabel)(({ style }) => style)

export default SLabel
