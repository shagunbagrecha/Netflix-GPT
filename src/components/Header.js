import React, { useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTsearchView } from "../utils/GPTslice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTsearch = useSelector((store) => store?.gpt?.showGPTsearch);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleGPTsearchClick = () => {
    dispatch(toggleGPTsearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black/80 z-10 flex flex-col justify-between md:flex-row">
      <img className="w-44 mt-6 mx-auto md:mx-0" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex items-center gap-4 justify-between mt-4 text-white">
          {showGPTsearch && (
            <select
              className="p-2 m-2 text-black bg-gray-400 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.flag + " " + lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 mx-4 my-2 bg-[#E50914] shadow-inner rounded-lg cursor-pointer"
            onClick={handleGPTsearchClick}
          >
            {showGPTsearch ? "Continue Browsing" : "GPT Search"}
          </button>
          <img alt="user-icon" className="hidden md:block w-10 rounded" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
