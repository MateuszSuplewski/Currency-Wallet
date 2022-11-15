import styled from 'styled-components'

const DefaultSRow = styled.tr`
  @media screen and (min-width: 826px) {
    &:hover {
      background-color: rgba(211, 238, 170, 0.3);
    }
  }

  @media screen and (max-width: 825px) {
    display: block;
    border-top: 3px solid #ccc;
  }
`

const SRow = styled(DefaultSRow)(({ style }) => style)

export default SRow
