import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react";

// Styled Components
import { Base, Dropdown } from "./filterDropdownStyles";

// Types
type Props = {
  setValue: Dispatch<SetStateAction<string>>;
};
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
export const FilterDropdown: FC<Props> = ({ setValue }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <Base>
      <Dropdown
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
      </Dropdown>
    </Base>
  );
};
