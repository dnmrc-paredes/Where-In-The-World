import React, { Dispatch, SetStateAction, ChangeEvent } from "react";
import * as S from "./filterDropdownStyles";

type Props = {
  setValue: Dispatch<SetStateAction<string>>;
};
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
export const FilterDropdown = ({ setValue }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <S.Base>
      <S.Dropdown
        defaultValue="filter by region"
        onChange={handleChange}
        name="Filter by Region"
      >
        <option value="filter by region" disabled hidden>
          Filter by Region
        </option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </S.Dropdown>
    </S.Base>
  );
};
