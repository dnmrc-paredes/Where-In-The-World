import React, { FC } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import * as S from "./headerStyles";

export const Header: FC = () => {
  const router = useRouter();

  return (
    <S.Navbar>
      <h2 onClick={() => router.push("/")}> Where in the world? </h2>
      <S.ToggleTheme>
        <IoMoonOutline size={20} />
        <S.ThemeText> Dark Mode </S.ThemeText>
      </S.ToggleTheme>
    </S.Navbar>
  );
};
