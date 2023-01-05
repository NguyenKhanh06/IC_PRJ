import { useContext, createContext, useEffect, useState, forwardRef } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../config/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';


const AuthContext = createContext();
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AuthContextProvider = ({ children }) => {
  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const googleSignIn = () => {

    // provider.setCustomParameters({
    //   hd: "fpt.edu.vn"
    // });
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
      console.log('User', user.email)
      
      let regex = new RegExp("[a-z0-9]+@fpt.edu.vn");
      let regexfe = new RegExp("[a-z0-9]+@fe.edu.vn");
      if (!regex.test(user.email) && !regexfe.test(user.email)) {
        signOut(auth).then( handleClick())
      }
      navigate('/');
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    
    // signInWithRedirect(auth, provider)
  

  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="error">Your email can not signin!
      Please use email FPT
      </Alert>
      </Snackbar>
    </>

    
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
