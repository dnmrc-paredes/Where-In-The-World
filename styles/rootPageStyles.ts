import styled from "styled-components";

export const Base = styled.main(({ theme }) => ({
    flex: 1,
    display: 'flex',
    backgroundColor: theme.bg,
    flexDirection: 'column',
    minHeight: '100vh',
}));



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
    > h2 {
        color: ${props => props.theme.txtColor};
    }
`
export const NoResultHeading = styled.h2`
    color: ${props => props.theme.txtColor};
`