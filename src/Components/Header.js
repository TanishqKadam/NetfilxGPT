import React from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { LOGO, USERICON } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/constants";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); //to get the user from redux-store
  const dispatch = useDispatch();
  //display language only when you are on gptsearch component
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //dispatch the user to store.
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        ); //put in our store
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser()); //remove action in store.
        navigate("/");
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

  const handleGptSearchClick = () => {
    //this will work like toggle when we click on gptsearch then only GptSearch component should be visible either we can use state variable or use redux store .
    //to toggle we have to dispatch action
    dispatch(toggleGptSearchView()); //this will call and set as true
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 w-screen flex justify-between py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="bg-gray-600 text-white opacity-70 p-2 m-2 font-semibold"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 m-2 mx-4 my-2 bg-purple-500 text-white rounded-lg"
          >
           {showGptSearch ? 'Home Page':'GPT search'}
          </button>
          <img className="w-12 h-12" alt="user icon" src={USERICON}></img>
          <button
            className="font-bold text-white bg-red-500 mx-4 my-2 py-2 px-4 rounded-lg"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
