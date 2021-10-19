import styled from "styled-components";

export const Base = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    width: 500px;
    border-radius: 5px;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        width: auto;
    }
`;

export const Icon = styled.div(({ theme }) => ({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.elements,
    '@media screen and (max-width: 800px)': {
        flex: 2.5
    }
}));

export const SearchBase = styled.div`
    flex: 10;
    display: flex;
    background-color: green;
    @media screen and (max-width: 800px) {
        flex: 10;
    }
`;

export const SearchInput = styled.input(({ theme }) => ({
    border: 'none',
    outline: 'none',
    flex: 1,
    padding: '0 10px',
    fontWeight: 300,
    backgroundColor: theme.elements,
    color: theme.txtColor,
    '&::placeholder': {
        color: theme.txtColor
    }
}))
