import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -60, scrollDuration: 1000})


const FormContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 70vh;
    justify-content: center;
    background: #fff;

    h1 {
        margin: 30px;
        font-size: 2.5rem;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const FormInput = styled.input`
    background: rgba(255, 255, 255, 0.6);
    min-width: 300px;
    width: ${ props => props.width};
    height: ${props => props.height};
    min-height: 50px;
    border: 2px solid #bfb5ab;
    color: #888;
    border-radius: 0px;
    margin: 20px;
    padding-left: 10px;

    ::-webkit-input-placeholder {
        color: #bfb5ab;
    }
`;

const FormTextArea = styled.textarea`
    background: rgba(255, 255, 255, 0.6);
    max-width: 640px;
    width: ${ props => props.width};
    height: ${props => props.height};
    min-height: 300px;
    border: 2px solid #bfb5ab;
    color: #888;
    border-radius: 0;
    margin: 20px;

`;

const Button = styled.button`
    background: #faf6f3;
    width: 280px;
    height:60px;
    color: #bfb5ab;
    font-weight: 600;
    margin: 30px;
    border: 2px solid #bfb5ab;
    border-radius: 0;
    font-family: sans-serif;
`



export default class Form extends Component {
    state = {  }
    constructor(props){
        super(props)
    }

    render() {
        return (
            <ScrollableAnchor id={'form'}>
                <FormContainer>
                    <h1>Entre em contato com a ZACCO</h1>
                    <FormGroup>
                        <FormInput placeholder="Nome"/>
                        <FormInput placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <FormTextArea/>
                    </FormGroup>
                    <FormGroup>
                        <Button>Enviar Mensagem</Button>
                    </FormGroup>
                </FormContainer>
            </ScrollableAnchor>
        );
    }
}