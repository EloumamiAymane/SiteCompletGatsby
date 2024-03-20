// gatsby-browser.js & gatsby-ssr.js
import React from "react";
import { ClickProvider } from "./src/Context/Context";

export const wrapRootElement = ({ element }) => {
    return <ClickProvider>{element}</ClickProvider>;
};
