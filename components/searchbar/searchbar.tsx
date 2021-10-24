import React, { ChangeEvent, FC, Dispatch, SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";
import * as S from "./searchbarStyles";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const SearchbarComponent: FC<Props> = ({ value, setValue }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <S.Base>
      <span>
        <IoSearch color="gray" size={20} />
      </span>
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
