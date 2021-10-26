import styled from "styled-components";

export const Navbar = styled.nav(({ theme }) => ({
    padding: '1rem',
    height: '70px',
    display: 'flex',
    boxShadow: '0px 3px 2px 0px #ebebeb',
    backgroundColor: theme.elements,
    color: theme.txtColor,
    '@media screen and (max-width: 550px)': {
        height: '100px'
    },
    'h2': {
        marginLeft: '3vw',
    }
}))

export const ToggleTheme = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`;

export const ThemeText = styled.p(({ theme }) => ({
    fontWeight: 800,
    marginRight: '3vw',
    marginLeft: '5px',
    color: theme.txtColor
}));