import {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../firebase'; 
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthContextProvider({children}) {

    const [user, setUser] = useState({})

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
        })
        return () => {
            unsubscriber();
        }
    }) 
     

    return (
        <AuthContext.Provider value={{signUp, logOut, signIn, user}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export function UserAuth() {
    return useContext(AuthContext);
}