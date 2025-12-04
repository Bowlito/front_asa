import type { UserType } from "./UserType";

export type SetUser = (user: UserType | null) => void;
export type SetIsConnected = (isConnected: boolean) => void

export type GlobalContextType = {
    user: UserType | null;
    setUser: SetUser;
    isConnected: boolean;
    setIsConnected: SetIsConnected;
}