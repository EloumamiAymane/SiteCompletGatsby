// context.js
import React, { createContext, useState } from "react";

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
    const [click, setClick] = useState(false);

    const openMenu = () => {
        setClick(true);
    };
    const closeMenu = () => {
        setClick(false);
    };

    return (
        <ClickContext.Provider value={{ click, openMenu,closeMenu }}>
            {children}
        </ClickContext.Provider>
    );
};

export default ClickContext;
