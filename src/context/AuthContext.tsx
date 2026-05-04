import { User } from "firebase/auth";
import { createContext } from "react";

export interface AuthContextType{
    user: User | null;
    loading:boolean;
    signIn:(email:string, password:string)=>Promise<any>;
    logOut:()=>Promise<any>;
    createUser:(email:string, password:string)=>Promise<any>;
    signInWithGoogle:()=>Promise<any>;
}

export const AuthContext=createContext<AuthContextType | null>(null);
