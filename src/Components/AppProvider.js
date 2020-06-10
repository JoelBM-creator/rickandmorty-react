import React, { createContext } from 'react';
export const AppContext = createContext();

export default function (props) {
    return(
        <AppContext.Provider value={{

        }}>
            { props.children }
        </AppContext.Provider>
    )
}