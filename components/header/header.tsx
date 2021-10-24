import React, { FC } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import * as S from "./headerStyles";

export const Header: FC = () => {
  const router = useRouter();

  return (
    <S.Navbar>
      <a onClick={() => router.push("/")}>
        <h2>Where in the world?</h2>
      </a>
      <S.ToggleTheme>
        <IoMoonOutline size={20} />
        <S.ThemeText> Dark Mode </S.ThemeText>
      </S.ToggleTheme>
    </S.Navbar>
  );
};
