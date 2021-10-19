import styled from "styled-components";

export const Base = styled.main`
    flex: 1;
    display: flex;
    background-color: ${({theme}) => theme.bg};
    flex-direction: column;
    min-height: 100vh;
`

export const Options = styled.div`
    padding: 3rem 55px 0 55px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 3rem 20px 0 20px;
    }
`

export const Countries = styled.div`
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-self: stretch;
    justify-content: center;
`

export const NoResultsBase = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NoResultHeading = styled.h2`
    color: ${({theme}) => theme.txtColor};
`