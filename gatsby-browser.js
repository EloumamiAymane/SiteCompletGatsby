import "./src/styles/index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { ClickProvider } from "./src/Context/Context";

export const wrapRootElement = ({ element }) => {
    return <ClickProvider>{element}</ClickProvider>;
};
