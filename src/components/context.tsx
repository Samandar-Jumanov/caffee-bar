"use client"


import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";


interface ContextProps {
    setOpen : Dispatch<SetStateAction<boolean>>;
    open : boolean,
    isAuthenticated: boolean; 
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
   
}

const GlobalContext = createContext<ContextProps>({
    isAuthenticated: false, 
    setIsAuthenticated: () => {} ,
    open : false,
    setOpen : () => {},
   
});

interface GlobalContextProviderProps {
    children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);
    const [open , setOpen ] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated , open , setOpen  }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
