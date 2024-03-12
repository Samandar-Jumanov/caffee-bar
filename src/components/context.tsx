"use client"


import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ContextProps {
    isAuthenticated: boolean; 
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
    isAuthenticated: false, 
    setIsAuthenticated: () => {} 
});

interface GlobalContextProviderProps {
    children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
