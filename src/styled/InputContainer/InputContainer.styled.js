import styled from 'styled-components'

const DefaultSInputContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  box-sizing: border-box;
  flex-basis: 100%;
`

const SInputContainer = styled(DefaultSInputContainer)(({ style }) => style)

export default SInputContainer
