import styled from "styled-components";
export const Card = styled.div`
    height: 330px;
    width: 250px;
    border-radius: 5px;
    margin: 37.5px;
    overflow: hidden;
    box-shadow: 0px 3px 15px 2px #EDEDED;
    background-color: ${props => props.theme.bg.lightMode};
    cursor: pointer;
`
export const CountryInfo = styled.section`
    display: flex;
    justify-content: center;
    height: 170px;
    > div {
        flex: 1;
        margin: auto 25px;
    > h1 {
        font-size: 20px;
        margin-bottom: 10px;
        word-wrap: break-word;
    }
    > p {
        margin: 2px 0;
    }
    }
`
