import React, { Component } from 'react';
import styled from 'styled-components';
import fundo from '../../assets/imgs/rio.jpeg';
import LazyHero from 'react-lazy-hero';

const PriceCardTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.2rem;
    color: #777;
    border-bottom: 1px solid #bfb5ab;

`;

const PriceCardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    line-height: 2.0rem;
    background: rgba(235, 90, 7, 0.8);
    color: #FFF;
    h3, h5 {
        font-size: 1.7rem;
    }
`;

const PriceButton = styled.button`
    background: #5ac0cc;
    // border: 2px solid #bfb5ab;
    color: #fff;
    font-family: sans-serif;
    font-size: 0.9rem;
    width: 200px;
    height: 60px;
    border-radius: 45px;
    margin: 25px;

    &:hover {
        background: #5ac0cc;
        color: #FFF;
        border: none;
    }

`;
const PriceCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    min-width: 320px;
    height: 600px;
    background: rgba(255, 255, 255, 0.8);
    margin: 2%;
    text-align: center;
    border: 1px solid #c9c9c9;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    ${PriceCardTitle} {
        height: 80px;
        background: #fff;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
    ${PriceCardContent} {
        flex-grow: 1;
    }
    ${PriceButton} {
        align-self: center;
    }
    @media (max-width: 350px) {
     min-width: 300px;
    }
`;

const GroupCards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
`;

const PriceTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    min-height: 90vh;
    padding: 2%;
    background: #fff;
    background-size: cover;
    overflow: hidden;

    h1.title {
        text-align: center;
        width: 100%;
        font-size: 2.5rem;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
`;

export default class PriceCards extends Component {
    state = {  }
    render() {
        return (
            <PriceTable>
                <h1 className="title">PLANOS WEBSITES</h1>
                <GroupCards>
                    <PriceCard>
                        <PriceCardTitle>LANDING PAGE</PriceCardTitle>
                        <PriceCardContent>
                            <h5>1</h5>
                            <span>Página de conteúdo</span>
                            <h3>PRAZO</h3>
                            <span>15 DIAS ÚTEIS</span>
                        </PriceCardContent>
                        <span>Site Responsivo</span>
                        <span>Google Analytics </span>
                        <span>Google Maps</span>
                        <span>Formulários</span>
                        <span>Redes Sociais</span>
                        <PriceButton>Saiba Mais</PriceButton>
                    </PriceCard>
                    
                    <PriceCard>
                        <PriceCardTitle>PLANO EXPRESSO</PriceCardTitle>
                        <PriceCardContent>
                            <h5>Até 4</h5>
                            <span>Páginas de conteúdo</span>
                            <h3>PRAZO</h3>
                            <span>25 DIAS ÚTEIS</span>
                        </PriceCardContent>
                        <span>Site Responsivo</span>
                        <span>Google Analytics </span>
                        <span>Google Maps</span>
                        <span>Formulários</span>
                        <span>Redes Sociais</span>
                        <PriceButton>Saiba Mais</PriceButton>
                    </PriceCard>

                    <PriceCard>
                        <PriceCardTitle>PLANO PROFISSIONAL</PriceCardTitle>
                        <PriceCardContent>
                            <h5>Até 6</h5>
                            <span>Páginas de conteúdo </span>
                            <h3>PRAZO</h3>
                            <span>30 DIAS ÚTEIS</span>
                        </PriceCardContent>
                        <span>Site Responsivo</span>
                        <span>Google Analytics </span>
                        <span>Google Maps</span>
                        <span>Formulários</span>
                        <span>Redes Sociais</span>
                        <PriceButton>Saiba Mais</PriceButton>
                    </PriceCard>

                    <PriceCard>
                        <PriceCardTitle>PLANO PREMIUM</PriceCardTitle>
                        <PriceCardContent>
                            <h5>Até 10</h5>
                            <span>Páginas de conteúdo </span>
                            <h3>PRAZO</h3>
                            <span>45 DIAS ÚTEIS</span>
                        </PriceCardContent>
                        <span>Site Responsivo</span>
                        <span>Google Analytics </span>
                        <span>Google Maps</span>
                        <span>Formulários</span>
                        <span>Redes Sociais</span>
                        <PriceButton>Saiba Mais</PriceButton>
                    </PriceCard>
                </GroupCards>
            </PriceTable>
        );
    }
}

export { PriceTable, GroupCards, PriceCard, PriceCardTitle, PriceCardContent, PriceButton }