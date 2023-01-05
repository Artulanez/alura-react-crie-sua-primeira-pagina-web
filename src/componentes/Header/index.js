import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import styled from 'styled-components'

const HeaderConteiner = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() { 
    return (
        <HeaderConteiner>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader />
        </HeaderConteiner>
    )
}

export default Header