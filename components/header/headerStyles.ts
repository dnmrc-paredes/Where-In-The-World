import styled from "styled-components"

export const Navbar = styled.nav`
    padding: 1rem;
    height: 70px;
    display: flex;
    box-shadow: 0px 3px 2px 0px #EBEBEB;

    @media screen and (max-width: 550px) {
        height: 100px;
    }
`

export const NavTitle = styled.div`
    flex: 1;
    /* background-color: blue; */
    display: flex;
    align-items: center;
`

export const Title = styled.h2`
    color: black;
    margin-left: 3vw;
    font-weight: 800;
    cursor: pointer;

    @media screen and (max-width: 550px) {
        font-size: 15px;
    }
`

export const ToggleTheme = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    /* background-color: pink; */
`

export const ThemeText = styled.p`
    font-weight: 600;
    margin-right: 3vw;
    margin-left: 5px;
    font-weight: 800;
`