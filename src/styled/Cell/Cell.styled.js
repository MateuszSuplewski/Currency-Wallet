import styled from 'styled-components'

const DefaultSHeaderCell = styled.th`
  padding: 1rem 1rem 1rem 0.7rem;
  color: #e5e5e5;
  text-align: ${({ align }) => align};

  @media screen and (max-width: 825px) {
    display: block;
  }
`

const DefaultSDataCell = styled.td`
  color: white;
  text-align: ${({ align }) => align};

  @media screen and (min-width: 826px) {
    padding: 0.2rem 0.7rem;
    &:hover {
      background-color: rgba(68, 90, 88, 0.5);
    }
  }

  @media screen and (max-width: 825px) {
    display: block;
    border-bottom: 1px solid #eee;
    position: relative;
    padding: 0.5rem 0.5rem 0.5rem 50%;

    &:before {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      width: 50%;
      padding-right: 1rem;
      white-space: nowrap;
      content: '${({ colName }) => colName}';
    }
  }
`

const SHeaderCell = styled(DefaultSHeaderCell)(({ style }) => style)
const SDataCell = styled(DefaultSDataCell)(({ style }) => style)

export { SDataCell, SHeaderCell }
