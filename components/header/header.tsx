import React, { FC } from "react";
import styled from "styled-components";
import { IoMoonOutline } from 'react-icons/io5'

// Styled Components

const Navbar = styled.nav`
    /* background-color: red; */
    height: 70px;
    display: flex;
`

const NavTitle = styled.div`
    flex: 1;
    /* background-color: blue; */
    display: flex;
    align-items: center;
`

const Title = styled.h2`
    color: black;
    margin-left: 60px;
`

const ToggleTheme = styled.div`
    flex: 1;
    /* background-color: yellow; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`

const ThemeText = styled.p`
    font-weight: 600;
    margin-right: 60px;
    margin-left: 5px;
`

export const Header: FC = () => {

    return (
        <Navbar>
            <NavTitle>
                <Title> Where in the world? </Title>
            </NavTitle>
            <ToggleTheme>
                <IoMoonOutline size={20} />
                <ThemeText> Dark Mode </ThemeText>
            </ToggleTheme>
        </Navbar>
    )

}