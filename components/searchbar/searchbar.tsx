import React, { ChangeEvent, FC, useState } from "react";
import { IoSearch } from 'react-icons/io5'
import { useRouter } from "next/router";

import { Base, SearchBase, SearchInput, Icon } from "./searchbarStyles";

export const SearchbarComponent: FC = () => {

    const [search, setSearch] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <Base>
            <Icon>
                <IoSearch color="gray" size={20} />
            </Icon>
            <SearchBase>
                <SearchInput onChange={handleChange} value={search} placeholder="Search for a country..." />
            </SearchBase>
        </Base>
    )

}