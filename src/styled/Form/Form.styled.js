import styled from 'styled-components'

const DefaultSForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0.375rem;
  padding: 0.625rem 0.375rem;
  box-sizing: border-box;
  background-color: ${({ theme, bgColor }) => bgColor || theme.formBgColor};
  box-shadow: 1px 0px 28px -3px rgba(66, 68, 90, 1);

  @media screen and (max-width: 825px) {
      margin: 1rem auto;
      box-shadow: 1px 0px 15px -3px rgba(66, 68, 90, 1);
  }
`

const SForm = styled(DefaultSForm)(({ style }) => style)

export default SForm
