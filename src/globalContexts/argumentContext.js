import React, { useState } from "react";

export const ArgumentContext = React.createContext();

export const ArgumentContextProvider = ({ children }) => {
    const [argument, setArgument] = useState(-1);
    // const value = useMemo(
    //     () => ({ screenText, setScreenText }),
    //     [screenText, setScreenText]
    // );
    return (
        <ArgumentContext.Provider value={{ argument, setArgument }}>
            {children}
        </ArgumentContext.Provider>
    );
};
