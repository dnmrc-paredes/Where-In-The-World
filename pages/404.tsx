import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import * as S from "../styles/errorStyles";

const CustomError: NextPage = () => {

    const router = useRouter()

    return (
        <S.Base>
            <S.ErrorTag> We are sorry, Page not found! </S.ErrorTag>
            <S.GoBack onClick={() => router.back()} > Go Back </S.GoBack>
        </S.Base>
    )

}

export default CustomError