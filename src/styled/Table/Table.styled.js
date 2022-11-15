import styled from 'styled-components'

const DefaultSTable = styled.table`
  border-collapse: collapse;
  background-color: rgba(48, 92, 103, 1);
  background-image: linear-gradient(
    45deg,
    rgba(48, 92, 103, 1) 0%,
    rgba(25, 43, 95, 1) 100%
  );
  table-layout: fixed;
  margin: 1rem auto;
  max-width: 1600px;
  box-shadow: 1px 0px 28px -3px rgba(66, 68, 90, 1);

  & thead th:nth-child(1) {
    width: 10%;
  }

  & thead th:nth-child(2) {
    width: 11%;
  }

  & thead th:nth-child(3) {
    width: 18%;
  }

  & thead th:nth-child(4) {
    width: 16%;
  }

  & thead th:nth-child(5) {
    width: 12%;
  }

  & thead th:nth-child(6) {
    width: 15%;
  }

  & thead th:nth-child(7) {
    width: 18%;
  }

  & tfoot tr:last-child td {
    padding: 1rem 0.7rem;
  }

  @media screen and (max-width: 825px) {
    margin: 3rem 1rem 1rem 1rem;
    box-shadow: 1px 0px 15px -3px rgba(66, 68, 90, 1);
    &,
    tbody,
    tfoot {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tfoot tr td {
      text-align: center;
    }
  }
`

const STable = styled(DefaultSTable)(({ style }) => style)

export default STable
