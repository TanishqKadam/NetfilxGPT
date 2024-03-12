import React from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { LOGO,USERICON } from "../Utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);  //to get the user from redux-store
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL} = user;
        //dispatch the user to store.
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL})); //put in our store
        navigate('/browse');
      } else {
        // User is signed out
        // ...
        dispatch(removeUser()); //remove action in store.
        navigate('/');
      }
    });

    return () => unsubscribe(); //when component unmounts it will clean up the useEffect -> onAuthStateChange returns a unsubscribe function 
  }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 w-screen flex justify-between py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="user icon"
            src={USERICON}
          ></img>
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
