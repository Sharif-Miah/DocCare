import React, { createContext, useState } from 'react';
import app from '../Auth/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const registerInprovider = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = { registerInprovider }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;