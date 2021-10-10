import styled from "styled-components";

export const TitleTag = styled.h1`
    margin-bottom: 18px;
    font-weight: 800;
    font-size: 30px;
`

export const InfoTag = styled.p`
    margin: 7px 0;
`

export const RootBase = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const DetailsBase = styled.div`
    display: flex;

    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
`

export const DetailsImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 200px;
    margin: 0rem 40px;
`

export const DetailsBaseInfo = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 40px;

    @media screen and (max-width: 950px) {
        margin-top: 40px;
    }
`

export const DetailsInfo = styled.div`
    display: flex;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const LeftInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const RightInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        margin-top: 35px;
    }
`

export const BorderBase = styled.section`
    display: flex;
    margin-top: 40px;
    /* align-items: center; */
    /* justify-content: center; */

    @media screen and (max-width: 700px) {
        align-items: unset;
        flex-direction: column;
    }
`

export const BorderCountriesBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    flex-flow: row wrap;
    padding-bottom: 2rem;
    
    @media screen and (max-width: 700px) {
        margin-top: 18px;
        justify-content: flex-start;
    }
`

export const BorderItem = styled.div`
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: max-content;
    padding: 0 0.5rem;
    box-shadow: 0px 1px 1px 2px #E0E0E0;
    margin: 4px 4px;
    border-radius: 3px;
    font-weight: 300;
    cursor: pointer;
    font-size: 15px;
`

export const BackBase = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
`

export const BackBtn = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: 0px 1px 1px 2px #E0E0E0;
    cursor: pointer;
    width: 100px;
    display: flex;
    justify-content: center;
    height: 30px;
    align-items: center;
    background-color: white;
    /* margin: 0 120px; */
    margin: 0 8vw;
    /* margin: 0 200px; */

    @media screen and (max-width: 700px) {
        margin: 0 40px;
    }
`