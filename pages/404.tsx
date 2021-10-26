import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

// Styled Components
import { Base, ErrorTag, GoBack } from "../styles/errorStyles";

const CustomError: NextPage = () => {

    const router = useRouter()

    return (
        <Base>
            <ErrorTag> We are sorry, Page not found! </ErrorTag>
            <GoBack onClick={() => router.back()} > Go Back </GoBack>
        </Base>
    )

}

export default CustomError