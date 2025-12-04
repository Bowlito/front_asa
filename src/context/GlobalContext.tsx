import { createContext, useContext, useState, type ReactNode } from "react";
import type { GlobalContextType } from "../types/GlobalContextType";
import type { UserType } from "../types/UserType";



export const GlobalContext = createContext<GlobalContextType | null>(null)

export function GlobalProvider({children}: {children: ReactNode}){
    const [isConnected, setIsConnected] = useState<boolean>(false)
    const [user, setUser] = useState<UserType | null>(null)

    return(
        <GlobalContext.Provider value={{user, setUser, isConnected, setIsConnected}}>
            {children}
        </GlobalContext.Provider>
    );
};

export function useGlobalContext(){
    const context = useContext(GlobalContext);

    if(!context){
        throw new Error("Le context doit être utilisé dans le GlobalProvider");
        
    }

    return context;
}
