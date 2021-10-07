import React, { FC } from "react";
import styled from "styled-components";
import { IoMoonOutline } from 'react-icons/io5'

// Styled Components
import { Navbar, NavTitle, Title, ToggleTheme, ThemeText } from "./headerStyles";

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