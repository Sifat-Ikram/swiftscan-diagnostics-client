import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config.js';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true)

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleRegister = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (observer)=>{
           console.log("Watcher", observer);
           setUser(observer);
           if (observer) {
            const userInfo = { email: observer.email };
            axios.post('http://localhost:4321/jwt', userInfo, {withCredentials: true})
            .then(res =>{
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                }
                else{
                    localStorage.removeItem('access-token');
                    setLoading(false);
                }
            })
           }
        })
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        logIn,
        googleRegister,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;