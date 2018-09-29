import React from 'react';
import styled from 'styled-components';

import logo from '../../../assets/imgs/logo.png';

const Footer = styled.div`
    display: flex;
    flex-flow: column wrap;
    background: #444;
    border-top: 0.05rem solid #bfb5ab;
`;


const FooterLogo = styled.div`
    display: flex;
    flex-grow: 2;
    justify-content: center;
    align-items: center;
    color: #FFF;
`;

const FooterMenuBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    align-items: center;
    line-height: 1.2rem;
    //background: #910f35;
    margin: 10px;
    color: #bfb5ab;

    h1 {
        text-align: left;
        font-size: 1.3rem;
        color: #bfb5ab;
    }

    ul {
        line-height: 1.2rem;
        text-align: left;
        list-style: none;
        font-size: 0.8rem;
        font-weight: 300;

        a {
            color: #bfb5ab;
        }
    }
`;


const FooterMenu = styled.div`
    display: flex;
    flex-grow: 3;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
    //background: #910f35;
   
`;

const FooterIcons = styled.div`
    display: flex;
    flex-grow: 3;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    //background: #0e917b;
    color: #faf6f3;

    i {
        margin: 20px;
        font-size: 1.8rem;
    }

    button {
        margin-top: 10px;
        border-radius: 45px;
        color: #FFF;
        font-family: sans-serif;
        font-weight: bold;
        background: #5ac0cc;
        min-width: 200px;
    }
`;

const FooterMain = styled.div`
    display: flex;
    flex-flow: row wrap;
    background: #2967a5;
    min-height: 10vh;
    padding: 0 2% 0 2%;
`;

const FooterSmall = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    background: #2967a5;
    min-height: 7vh;
    color: #fff;
`;

export default () => (
    <Footer>
        <FooterMain>            
            <FooterIcons>
                <div>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </FooterIcons>
        </FooterMain>

        <FooterSmall>
            © 2018 Copyright Text
        </FooterSmall>
    </Footer>
);