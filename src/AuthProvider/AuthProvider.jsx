import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    
    const [user,setUser] = useState(null);

    const handleGoogleLogin = () =>{
       return signInWithPopup(auth,provider)
    }


    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = ()=>{
        return signOut(auth);
    }

    const updateUserProfile =  (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
      };
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
          };

    },[]);

    const authInfo = {
        user,
        setUser,
        signUpUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        handleGoogleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;