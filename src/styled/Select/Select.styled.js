import styled from 'styled-components'

const DefaultSSelect = styled.select`
  outline: none;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.7);
  min-width: 120px;
  flex-basis: 50%;
  box-sizing: content-box;
`

const SSelect = styled(DefaultSSelect)(({ style }) => style)

export default SSelect
