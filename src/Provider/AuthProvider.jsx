import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types'; 

import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/__Firebase.init';

 export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading ] = useState(true);


const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword (auth,email,password);
}
    const signInUser = (email , password ) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
  
const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}


    const logOut = () => {
        setLoading(true)
        return signOut (auth);
    }
    useEffect(()=>{
     const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing current user inside useEffect of AuthProvider', currentUser)
            setLoading(false)
        });
             return () => {
                unSubscribe();
             }
      
    },[])

const authInfo = { user,
     createUser,
     loading,
      signInUser,
      signInWithGoogle,
       logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;

/***
 * 1. create context and export it
 * 2. set Provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the the AuthProvider component as children and use it in the middle of the provider .
 */