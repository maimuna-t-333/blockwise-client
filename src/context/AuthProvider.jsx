import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

        const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


        useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user in the auth state change', currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

const authInfo={
    user,
    loading,
    signIn,
    logOut,


}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;