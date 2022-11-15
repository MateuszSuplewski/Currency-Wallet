import styled from 'styled-components'

const DefaultSInput = styled.input`
  outline: none;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.7);
  min-width: 120px;
  flex-basis: 50%;
`

const SInputContainer = styled(DefaultSInput)(({ style }) => style)

export default SInputContainer
