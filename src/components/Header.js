import React, { useEffect } from "react";
import { NETFLIX_LOGO_URL } from "../constants";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slice/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //cleanup function when component unmounts
    return unsubscribe;
  }, [dispatch, navigate]);

  const user = useSelector((store) => store.user);
  async function handleSignOut() {
    try {
      const signOutResponse = await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  }

  return (
    <div className="absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between items-center">
      <img className="w-44" src={NETFLIX_LOGO_URL} alt="Netflix Logo" />
      {user && (
        <div className="bg-red-500 h-7 w-20 flex items-center justify-center">
          <button className="text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
