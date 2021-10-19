import styled from "styled-components";

export const Card = styled.div(({theme}) => ({
    height: "330px",
    width: "250px",
    borderRadius: "5px",
    margin: "37.5px",
    overflow: "hidden",
    backgroundColor: theme.elements,
    cursor: "pointer",
}));

export const Title = styled.h1(({theme}) => ({
    fontSize: "20px",
    marginBottom: "10px",
    color: theme.txtColor,
}));

export const Detail = styled.p(({theme}) => ({
    margin: "2px 0",
    fontSize: "14px",
    fontWeight: 300,
    color: theme.txtColor,
}));

export const CountryInfo = styled.section`
    flex: 2;
    display: flex;
    justify-content: center;
    height: 170px;
`;

export const CountryDetails = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto 25px;
`;
