import styled from 'styled-components'

const DefaultSButton = styled.button`
  padding: 0.625rem;
  background-color: ${({ theme, bgColor }) => bgColor || theme.buttonColor};
  color: ${({ theme, color }) => color || theme.secondaryCellColor};
  font-weight: bold;
  border: none;
  letter-spacing: 1px;
  transition: 0.3s ease;
  cursor: pointer;
  min-width: 120px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  box-sizing: border-box;
  margin: 0.5rem;

  @media screen and (min-width: 826px) {
    &:hover {
      background-color: ${({ theme, hoverColor }) => hoverColor || theme.actionColor};
    }
  }
`

const SButton = styled(DefaultSButton)(({ style }) => style)

export default SButton
