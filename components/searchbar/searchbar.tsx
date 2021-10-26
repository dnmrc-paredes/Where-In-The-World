import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";
import { useTheme } from "styled-components";
import * as S from "./searchbarStyles";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const SearchbarComponent = ({ value, setValue }: Props) => {
  const theme = useTheme() as { txtColor: string };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <S.Base>
      <S.Icon>
        <IoSearch color="gray" size={20} />
      </S.Icon>
      <S.SearchBase>
        <S.SearchInput
          onChange={handleChange}
          value={value}
          placeholder="Search for a country..."
        />
      </S.SearchBase>
    </S.Base>
  );
};