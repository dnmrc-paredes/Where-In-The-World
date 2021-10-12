import React, { ChangeEvent, FC, Dispatch, SetStateAction } from "react";
import { IoSearch } from 'react-icons/io5'
import { useTheme } from "styled-components";

// Styled Components
import { Base, SearchBase, SearchInput, Icon } from "./searchbarStyles";

// Types
type Props = {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

export const SearchbarComponent: FC<Props> = ({ value, setValue }) => {

    const theme = useTheme() as { txtColor: string }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <Base>
            <Icon>
                {/* <IoSearch color={theme.txtColor} size={20} /> */}
                <IoSearch color={'black'} size={20} />
            </Icon>
            <SearchBase>
                <SearchInput onChange={handleChange} value={value} placeholder="Search for a country..." />
            </SearchBase>
        </Base>
    )

}