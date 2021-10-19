import React, { Dispatch, FC, SetStateAction } from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useRouter } from "next/router";
import * as S from "./headerStyles";

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
    <S.Navbar>
      <S.NavTitle>
        <S.Title onClick={() => router.push("/")}>Where in the world?</S.Title>
      </S.NavTitle>
      <S.ToggleTheme>
        {value === "light" ? (
          <IoMoonOutline size={20} />
        ) : (
          <IoMoon color="white" size={20} />
        )}
        <S.ThemeText data-testid="toggleTheme" onClick={toggleTheme}>
          {" "}
          Dark Mode{" "}
        </S.ThemeText>
      </S.ToggleTheme>
    </S.Navbar>
  );
};
