import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


const auth= getAuth(app);

export const AuthContext = createContext({});


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, SetLoading] = useState(true)

    const registerUser = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignup = (provider) => {
        SetLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        SetLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (cuttentUser)=> {
            setUser(cuttentUser);
            SetLoading(false)
        })
        return () => unsubscribe;
    },[])


    const authinfo = {user, loading, googleSignup, login, logOut, registerUser}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;