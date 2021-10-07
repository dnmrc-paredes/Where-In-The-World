import styled from "styled-components";

export const Card = styled.div`
    height: 330px;
    min-width: 250px;
    border-radius: 5px;
    margin: 40px;
    overflow: hidden;
    box-shadow: 0px 3px 15px 2px #EDEDED;
    background-color: ${props => props.theme.bg.lightMode};
    cursor: pointer;
`

export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
`

export const Detail = styled.p`
    margin: 2px 0;
`

export const ImageHolder = styled.div`
    flex: 1;
    display: flex;
    height: 150px;
`

export const CountryInfo = styled.section`
    flex: 2;
    display: flex;
    justify-content: center;
    height: 170px;
    /* background-color: yellow; */
`

export const CountryDetails = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */
    margin: auto 25px;
`