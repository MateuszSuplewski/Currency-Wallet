import styled from 'styled-components'

const DefaultSInformer = styled.td`
    text-align: center;
`

const STableInformer = styled(DefaultSInformer)(({ style }) => style)

const SInformerText = styled.p`
    color: ${({ color }) => color};
    font-size: 1.25rem;
    letter-spacing: 1px;
`

export { STableInformer, SInformerText }
