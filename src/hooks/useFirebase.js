import { useEffect, useState } from "react";
import firebaseInitializeTion from "../pages/Firebase/firebaseInitialize";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";

// initialize firebase app
firebaseInitializeTion();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoadding, setIsLoadding] = useState(true);
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    // Create a Account based on Password
    const registerUser = (email, password, name, history) => {
        setIsLoadding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                // send to firebase 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                console.log(user)
                history.replace('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoadding(false));
    }

    // Login User 
    const loginUser = (email, password, location, history) => {
        setIsLoadding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/home';
                console.log(destination)
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoadding(false));

    }
    // Google Sign In 
    const signInWithGoogle = (location, history) => {
        setIsLoadding(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                setError('')
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoadding(false));
    }
    // observer user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoadding(false)
        });
        return () => unSubscribe;
    }, [])

    // sign out user 
    const logout = () => {
        setIsLoadding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        })
            .finally(() => setIsLoadding(false));
    }

    return {
        user, logout, registerUser, error, loginUser, isLoadding, signInWithGoogle
    }
}
export default useFirebase;