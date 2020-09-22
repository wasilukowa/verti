import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import Logo from './LogoVerti';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (min-width: 980px){
        justify-content: space-between;
    }
`;

const Header = props => {
    return (
        <HeaderContainer>
            <Logo />
            <Navigation />
        </ HeaderContainer>
    )
}

export default Header;