import React, { FC } from "react";
import { IoMoonOutline } from 'react-icons/io5'
import { useRouter } from "next/router";

// Styled Components
import { Navbar, NavTitle, Title, ToggleTheme, ThemeText } from "./headerStyles";

export const Header: FC = () => {

    const router = useRouter()

    return (
        <Navbar>
            <NavTitle>
                <Title onClick={() => router.push('/')}> Where in the world? </Title>
            </NavTitle>
            <ToggleTheme>
                <IoMoonOutline size={20} />
                <ThemeText> Dark Mode </ThemeText>
            </ToggleTheme>
        </Navbar>
    )

}