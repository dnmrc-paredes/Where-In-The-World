import styled from "styled-components";

export const TitleTag = styled.h1`
    margin-bottom: 18px;
    font-weight: 800;
    font-size: 30px;
`

export const InfoTag = styled.p`
    margin: 7px 0;
    /* font-size: 1.3vw; */
`

export const RootBase = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    /* align-items: center; */
    /* background-color: red; */
`

export const DetailsBase = styled.div`
    display: flex;

    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
`

export const DetailsImgContainer = styled.div`
    flex: 1;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    min-width: 200px;
    margin: 0rem 40px;
    /* margin: 0rem 1vw; */

`

export const DetailsBaseInfo = styled.section`
    flex: 1;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 40px;

    @media screen and (max-width: 950px) {
        margin-top: 40px;
    }
`

export const DetailsInfo = styled.div`
    /* background-color: red; */
    display: flex;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const LeftInfo = styled.div`
    flex: 1;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const RightInfo = styled.div`
    flex: 1;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        margin-top: 35px;
    }
`

export const BorderBase = styled.section`
    display: flex;
    margin-top: 40px;
    /* justify-content: center; */
    align-items: center;
    /* background-color: red; */

    @media screen and (max-width: 700px) {
        align-items: unset;
        flex-direction: column;
    }
`

export const BorderCountriesBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 700px) {
        margin-top: 18px;
    }
`

export const BorderItem = styled.div`
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 80px;
    box-shadow: 0px 3px 2px 0px #EBEBEB;
    margin: 0 2px;
`