import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    sendEmailVerification,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../static/firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            async (user) => {
                if (user) {
                    console.log('user signed in!', user);
                } else {
                    console.log('user signed out!');
                }

                setCurrentUser(user);
                setLoading(false);
            },
            (err) => {
                console.log('An error occurred!', err);
            }
        );

        return unsubscribe;
    }, []);

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    async function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth);
    }

    const value = {
        currentUser,
        login,
        signup,
        logout,
    };


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
