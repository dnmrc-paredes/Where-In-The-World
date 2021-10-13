import styled from "styled-components";

export const Base = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    /* background-color: red; */
    width: 150px;
    background-color: ${props => props.theme.elements};
    /* box-shadow: 1px 1px 10px 0px #E0DCDC; */
    border-radius: 5px;

    @media screen and (max-width: 800px) {
        justify-content: flex-start;
        margin-top: 40px;
    }

`

export const Dropdown = styled.select`
    display: flex;
    justify-content: center;
    height: 40px;
    width: 150px;
    overflow: hidden;
    outline: none;
    border: none;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.txtColor};
`