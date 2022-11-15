import styled from 'styled-components'

const DefaultSError = styled.li`
  padding: 0.3rem 0.5rem;
  color: red;
  font-size: 0.85rem;
`

const SError = styled(DefaultSError)(({ style }) => style)

export default SError
