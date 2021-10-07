import styled from "styled-components"

export const Base = styled.div`
    /* border: solid black 2px; */
    /* background-color: pink; */
    /* padding: 0.5rem; */
    display: flex;
    justify-content: center;
    height: 40px;
    width: 500px;
    box-shadow: 1px 1px 10px 0px #E0DCDC;
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
    background-color: white;
    /* background-color: yellow; */

    @media screen and (max-width: 800px) {
        flex: 3;
    }
    /* min-width: 50px;
    max-width: 10vw; */
`

export const SearchBase = styled.div`
    flex: 10;
    display: flex;
    background-color: green;

    @media screen and (max-width: 800px) {
        flex: 10;
    }
    /* min-width: 450px;
    max-width: 90vw; */
`

export const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 0 10px;
    font-weight: 300;

    &::placeholder {
        color: gray;
    }

`