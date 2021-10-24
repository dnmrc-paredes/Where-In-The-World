import React, { Dispatch, FC, SetStateAction } from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useRouter } from "next/router";

// Styled Components
import {
    Navbar,
    NavTitle,
    Title,
    ToggleTheme,
    ThemeText,
} from "./headerStyles";

// Types
type Props = {
    changeTheme: Dispatch<SetStateAction<"light" | "dark" | undefined>>;
    value: "light" | "dark" | undefined;
};

export const Header: FC<Props> = ({ changeTheme, value }) => {

    const router = useRouter();

    const toggleTheme = () => {
        localStorage.setItem("themeMode", value === "light" ? "dark" : "light");
        changeTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <Navbar>
            <NavTitle>
                <Title onClick={() => router.push("/")}>
                    Where in the world?
                </Title>
            </NavTitle>
            <ToggleTheme>
                {value === "light" ? (
                    <IoMoonOutline size={20} />
                ) : (
                    <IoMoon color="white" size={20} />
                )}
                <ThemeText data-testid="toggleTheme" onClick={toggleTheme}> Dark Mode </ThemeText>
            </ToggleTheme>
        </Navbar>
    );
};
