import styled from "styled-components"

export const Base = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    width: 500px;
    border-radius: 5px;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        width: auto;
    }
`
export const Icon= styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.elements};
    @media screen and (max-width: 800px) {
        flex: 2.5;
    }
`
export const SearchBase = styled.div`
    flex: 10;
    display: flex;
    background-color: green;
    @media screen and (max-width: 800px) {
        flex: 10;
    }
`
export const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 0 10px;
    font-weight: 300;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.txtColor};
    &::placeholder {
        color: ${props => props.theme.txtColor};
    }
`