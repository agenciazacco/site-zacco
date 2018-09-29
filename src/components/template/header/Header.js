import React from 'react';
import { NavIcon, NavLink } from './NavItems';
import styled from 'styled-components';
import LazyHero from 'react-lazy-hero';
import logo from '../../../assets/imgs/logo.png';
import banner1 from '../../../assets/imgs/banner1.jpg';
import banner2 from '../../../assets/imgs/banner2.png';
import banner3 from '../../../assets/imgs/banner3.png';

const Header = styled.header`
    display: flex;
    height: auto;
`;

const NavBar = styled.div`
    position: absolute;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    height: 120px;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;
    aling-items: center;
    width: 400px;
    height: 100%;
    @media (max-width: 700px) {
        width: 150px;
        height: 90px;
        padding: 12px;
    }
`;

const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    width: auto;
    height: 100%;
    a {
        padding: 10px;
        color: #f5f5f5;
        font-weight: bold;
        font-size: 1.3rem;
        min-width: 100px;
        &:hover {
            color: #444;
        }
        @media (max-width: 700px) {
            min-width: 120px;
            border-color: #c21b2b;
            background: #f03d4d;
            font-weight: 500;
            color: #f5f5f5;
            font-size: 0.75em;
            border-radius: 25px;
        }
    }
`;

const Titulo = styled.h1`
    color: #f6f6f6;
    text-shadow: 1px 1px 1px #999;
    font-size: 4rem;
    @media (max-width: 700px) {
        margin-top: 50px;
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const Subtitle = styled.p`
    color: #f6f6f6;
    text-shadow: 1px 1px 1px #999;
    font-size: 2.5rem;
    line-height: 3rem;
    @media (max-width: 700px) {
        font-size: 1.3rem;
        line-height: 1.7rem;
    }
`;
export default props => (
    <div>
        <Header>
            <NavBar>
                <Logo>
                    <img src={logo} />
                </Logo>
            </NavBar>
            
        </Header>
        <LazyHero 
            imageSrc={banner1}
            minHeight="75vh"
            isCentered={true}
            opacity={0}
        >
            <Titulo>EM QUE ACREDITAMOS?</Titulo>
            <Subtitle>Você precisa ser encontrado e nós podemos te ajudar <br/>com isso, com um site com a sua cara.</Subtitle>
        </LazyHero>
    </div>
);