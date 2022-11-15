import styled from 'styled-components'

const DefaultSCaption = styled.caption`
  padding: 0.625rem;
  box-sizing: border-box;
  background-color: rgba(243, 243, 243, 1);
  background-image: linear-gradient(
    45deg,
    rgba(243, 243, 243, 1) 0%,
    rgba(25, 43, 95, 1) 32%,
    rgba(48, 92, 103, 1) 68%,
    rgba(27, 27, 27, 1) 100%
  );
  letter-spacing: 2px;
  font-size: 1.25rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  color: white;

  @media screen and (max-width: 825px) {
    display: inline-block;
    width: 100%;
  }
`

const SCaption = styled(DefaultSCaption)(({ style }) => style)

export default SCaption
