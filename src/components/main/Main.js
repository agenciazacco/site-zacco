import React from 'react';
import styled from 'styled-components';

import backgroundServicos from '../../assets/imgs/servicos/background-full.jpg';
import pcIcon from '../../assets/imgs/servicos/pc.png';
import cartIcon from '../../assets/imgs/servicos/cart.png';
import socialIcon from '../../assets/imgs/servicos/social.png';
import mobileIcon from '../../assets/imgs/servicos/mobile.png';
import emailIcon from '../../assets/imgs/servicos/email.png';

import criacaoSites from '../../assets/imgs/criacao-sites.png';
import profissionais from '../../assets/imgs/profissionais.png';

import responsiveSites from '../../assets/imgs/funcionalidades/site-responsivo.png';
import formsIcon from '../../assets/imgs/funcionalidades/formularios.png';
import sociaisIcon from '../../assets/imgs/funcionalidades/sociais.png';
import mapIcon from '../../assets/imgs/funcionalidades/map.png';
import whatsAppIcon from '../../assets/imgs/funcionalidades/whatsapp.png';
import chartsIcon from '../../assets/imgs/funcionalidades/charts.png';

import PriceCards from '../price-table/PriceTable'

const Main = styled.main`
    background-color: #3eb2e0 ;
`;

const WhoWeAre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 35vh;
    flex-flow: column wrap;
    background-color: #fff;
    padding:  0 10% 0 10%;
    text-decoration-skip: objects ;
    font-family: 'Lato', sans-serif;
    font-weight: 300;

    h1 {
        font-size: 3rem;
        font-weight: 300;
        line-height: 4rem;
        font-family: 'Lato', sans-serif;

        @media (max-width: 700px) {
            font-size: 2rem;
        }
    }
`;

const VirtualStores = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    min-height: 100vh;
    background: #f2f2f2;
    background-size: cover;
    overflow: hidden;
    background-image: url(${backgroundServicos});
    
    .title {
        width: 100%;
        font-size: 3rem;
        margin-top: 40px;
        line-height: 4rem;
        color: #FFF;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        @media (max-width: 700px) {
            font-size: 2rem;
        }
    }
`;

const CardIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 10px;
    margin-bottom: 5%;
    border: 1px solid #c9c9c9;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.10);
`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    z-index: 100;
    background: rgb(41, 103, 165, .9);
    max-width: 320px;
    min-height: 600px;
    margin: 3%;
    padding: 1%;
    border-radius:10px;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.50);
    color: #fff;

    ${CardIcon} {
        img {
            width: 100px;
            height: 80px;
        }
    }

    h1 {
        font-size: 1.2rem;
        line-height: 2rem;
        font-family: 'Lato', sans-serif;
    }

    p {
        padding:  0 20px 0 20px;
        font-size: 1rem;
        line-height: 1.2rem;
        font-family: 'Lato', sans-serif;
    }
`;

const Button = styled.button`
    width: 300px;
    border-color: #444;
    background: #eee;
    border-width: 3px;
    font-weight: 700;
    font-size: 0.8rem;
    font-family: sans-serif;
    border-radius: 0;
`;

const Psites = styled.div`
    display: flex;
    flex-flow: column wrap;
    min-height: 50vh;
    padding-bottom: 30px;
    background: #eee;
    h1 {
        width: 100%;
        font-size: 1.8rem;
        margin-top: 40px;
        text-align: center;
        padding-left: 5%;
        line-height: 3rem;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        @media (max-width: 1250px) {
            text-align: center;
            font-size: 1.8rem;
            line-height: 2.8rem;
        }
        @media (max-width: 700px) {
            text-align: center;
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
    }

    div {
        display: flex;
        padding: 0 5% 0 5%;
        flex-flow: row wrap;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 10px;
        justify-content: center;
        @media (max-width: 1250px) { justify-content: center; }

        img {
            width: 50%;
            height: 50%px;
            order: 2;
            @media (max-width: 1250px) {
                padding: 10%;
                width: 100%;
                height: 100%;
                order: 1;
            }
        }
        p {
            order: 1;
            width: 40%;
            text-align: left;
            font-size: 1.2rem; 

            @media (max-width: 1250px) {
                order: 2;
                width: 100%;
                font-size: 1rem; 
            }  
        }

        @media (max-width: 1250px) {
            flex-flow: column wrap;
        }
    }

    ${Button} {
        margin-top: 30px; 
        @media (max-width: 1250px) {
            margin: 0 auto;
            margin-top: 20px;
        } 
    }

`;

const Functionalities = styled.div`
    display:flex;
    justify-content: center;
    flex-flow: row wrap;
    background: #fece00;
    min-height: 90vh;
    padding: 1%;

    @media (max-width: 900px) {
        flex-flow: column wrap;
    }

    h1 {
        width: 100%;
        font-size: 3rem;
        color: #1f4a6e;

        @media (max-width: 700px) {
            font-size: 2rem;
        }
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        max-width: 30%;
        padding: 2%;

        @media (max-width: 900px) {
            max-width: 100%;
        }

        

        h2 {
            font-size: 1.5rem;
            color: #1f4a6e; 
        }

        img {
            max-width: 180px;
        }

        p {
            align-text: center;
            color: #444;
        }
    }
`;



export default props => (
    <Main>
        <WhoWeAre>
            <h1>QUEM SOMOS</h1>
            <p>
                A Zacco é uma Agência Digital especializada em desenvolver o seu negócio na internet.
                Se você é empreendedor individual, micro, pequena, média empresa, profissional liberal ou prestador de serviços,
                é  procura se consolidar em seu mercado, o seu primeiro pensamento deve ser uma só coisa: <strong>Visibilidade!</strong> 
                Você precisa ser encontrado e nós podemos te ajudar com isso com um site com a sua cara.
            </p>
        </WhoWeAre>

        <VirtualStores>
            <h1 className="title">O QUE FAZEMOS</h1>
            <Card>
                <CardIcon>
                    <img src={pcIcon}/>
                </CardIcon>
                <h1>CRIAÇÃO DE SITES</h1>
                <p>
                    Criar um site é vital para ter visibilidade na internet.
                    Pensamos na necessidade de empresários e comerciantes que estão interessados
                    em ingressar no mercado on-line
                </p>
            </Card>

            <Card>
                <CardIcon>
                    <img src={cartIcon}/>
                </CardIcon>
                <h1>LOJAS VIRTUAIS</h1>
                <p>
                    Solução completa com varias opções de pagamento e frete com estoque, além de suporte completo.
                    Gerencie suas vendas, promova produtos e receba pagamentos em um só lugar.
                </p>
            </Card>

            <Card>
                <CardIcon>
                    <img src={socialIcon}/>
                </CardIcon>
                <h1>GESTÃO DE MÍDIAS SOCIAIS</h1>
                <p>
                    Aumentamos seu alcance nas redes sociais.
                    Vamos gerenciar suas redes sociais e produzir material publicitário além de prestar
                    toda assistência necessária quando o assunto for presença digital.
                </p>
            </Card>

            <Card>
                <CardIcon>
                    <img src={mobileIcon}/>
                </CardIcon>
                <h1>APLICATIVOS</h1>
                <p>
                    Criamos e desenvolvemos aplicativos móveis para smartphones e tablets, personalizados para cada cliente. 
                    Ofereça um diferencial a mais para os seus clientes.
                </p>
            </Card>

            <Card>
                <CardIcon>
                    <img src={emailIcon}/>
                </CardIcon>
                <h1>EMAIL MARKETING</h1>
                <p>
                    A maneira mais rápida e direta para sua empresa se comunicar. 
                    Atinja um amplo número de clientes ou potenciais clientes através de e-mail.
                </p>
            </Card>
        </VirtualStores>

        <Psites>
            <h1>CRIAÇÃO DE SITES PROFISSIONAIS <br/>E PERSONALIZADOS</h1>
            <div>
                <p>
                    Nosso principal objetivo é dar <strong>visibilidade</strong> a sua marca com um ótimo com site profissional, 
                    exclusivo e com o melhor custo benefício.
                    Ajudando assim Micro e Pequenas Empresas a conquistarem cada vez mais espaço no mercado.

                    <Button>SOLICITE UMA PROPOSTA</Button>
                </p>
                <img src={criacaoSites}/>
            </div>
        </Psites>

        <Functionalities>
            <h1>Funcionalidades</h1>
            <div>
                <img src={responsiveSites}/>
                <h2>Site responsivo</h2>
                <p>
                    Exiba seu site através de qualquer dispositivo: desktop, notebook, tablet ou smartphone.
                </p>
            </div>

            <div>
                <img src={formsIcon}/>
                <h2>Formulários</h2>
                <p>
                    Receba mensagens de seus clientes diretamente pelo seu site.
                    O Formulário enviará os dados ao e-mail desejado.
                </p>
            </div>

            <div>
                <img src={sociaisIcon}/>
                <h2>Redes Sociais</h2>
                <p>
                    Seu site será totalmente integrado com as redes sociais de sua 
                    empresa (Facebook, Twitter, Youtube, Instagram,  e outras).
                </p>
            </div>

            <div>
                <img src={mapIcon}/>
                <h2>Google Maps</h2>
                <p>
                    Ajude o seu cliente a encontrar o seu negócio. Aumente as
                    interações de usuários adicionando mapas em sites.
                </p>
            </div>

            <div>
                <img src={whatsAppIcon}/>
                <h2>WhatsApp</h2>
                <p>
                    Os visitantes do site poderão entrar em contato direto
                    com seu whatsapp apenas com um clique, sem complicação.
                </p>
            </div>

            <div>
                <img src={chartsIcon}/>
                <h2>Relatório</h2>
                <p>
                    Tenha todos os dados sobre os acessos ao seu site em tempo real, através de um relatório personalizado.
                </p>
            </div>

        </Functionalities>

        <Psites>
            <h1>SITES PARA <strong>PEQUENAS <br/>E MICRO EMPRESAS</strong></h1>
            <div>
                <p>
                    Pensando no profisisonal liberal, no MEI, no micro e pequeno Empresário, nós da ZACCO elaboramos planos
                    especiais para criação de  sites profissionais a baixo custo, para que você pequeno empreendedor possa ter um site profissional
                    <Button>NOSSOS PLANOS</Button>
                </p>
                <img src={profissionais}/>
            </div>
        </Psites>

        <PriceCards/>
    </Main>
);
