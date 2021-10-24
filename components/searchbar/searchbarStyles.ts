import styled from "styled-components"

export const Base = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 500px;
    box-shadow: 1px 1px 10px 0px #E0DCDC;
    border-radius: 5px;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        width: auto;
    }
    > span {
    flex: 1;
    text-align: center;
    background-color: white;
    margin: 3px 0 0 0;
    }
`

export const SearchBase = styled.div`
    flex: 10;
    display: flex;
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
    &::placeholder {
        color: gray;
    }

`