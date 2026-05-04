import {  useContext } from 'react';
import { AuthContext, AuthContextType } from '../context/AuthContext';

const useAuth = ():AuthContextType => {
    const authInfo=useContext(AuthContext);
    if(!authInfo) throw new Error("useAuth must be used within an AuthProvider")
    return authInfo;
};

export default useAuth;