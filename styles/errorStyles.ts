import styled from "styled-components";

export const Base = styled.div`
    background-color: ${props => props.theme.bg};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ErrorTag = styled.h1`
    color: ${props => props.theme.txtColor};
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 7vw;
    }
`

export const GoBack = styled.button`
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.txtColor};
    border: none;
    outline: none;
    margin-top: 10px;
    height: 30px;
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
`