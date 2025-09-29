import React, {useEffect} from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

    useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black/80 z-10 flex">
      <img
        className="w-44 mt-6"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex justify-between items-center gap-4 ml-auto mt-4 text-white">
          <img alt="user-icon" className="w-10 rounded" src={user?.photoURL} />
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
