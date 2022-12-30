import React, { useMemo, useState } from "react";

export const ScreenTextContext = React.createContext("hola");

export const ScreenTextContextProvider = ({ children }) => {
    const [screenText, setScreenText] = useState("hola");
    // const value = useMemo(
    //     () => ({ screenText, setScreenText }),
    //     [screenText, setScreenText]
    // );
    return (
        <ScreenTextContext.Provider value={{ screenText, setScreenText }}>
            {children}
        </ScreenTextContext.Provider>
    );
};
