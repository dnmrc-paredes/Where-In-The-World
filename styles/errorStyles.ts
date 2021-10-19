import styled from "styled-components";

export const Base = styled.div`
    background-color: ${({ theme }) => theme.bg};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ErrorTag = styled.h1`
    color: ${({ theme }) => theme.txtColor};
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 7vw;
    }
`

export const GoBack = styled.button`
    background-color: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.txtColor};
    border: none;
    outline: none;
    margin-top: 10px;
    height: 30px;
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
`