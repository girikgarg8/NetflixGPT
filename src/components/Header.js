import React, { useEffect } from "react";
import { NETFLIX_LOGO_URL } from "../constants";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slice/userSlice";
import { clearMoviesSlice } from "../slice/moviesSlice";
import { clearGPTSlice, toggleShowGPTSearch } from "../slice/gptSlice";

const Header = ({ isBrowsePage = false }) => {
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
        dispatch(clearMoviesSlice());
        dispatch(clearGPTSlice());
        navigate("/");
      }
    });
    //cleanup function when component unmounts
    return unsubscribe;
  }, [dispatch, navigate]);

  const user = useSelector((store) => store.user);

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {}
  }

  const handleGPTButtonClick = () => {
    dispatch(toggleShowGPTSearch());
  };

  return (
    <div
      className={`absolute w-screen px-8 py-2 z-10 flex justify-between items-center overflow-y-hidden ${
        isBrowsePage ? "bg-black" : "bg-gradient-to-b from-black"
      }`}
    >
      <Link to="/">
        <img className="w-44" src={NETFLIX_LOGO_URL} alt="Netflix Logo" />{" "}
      </Link>
      {user && (
        <>
          <div className="p-2">
            <button
              className="h-9 w-36 bg-purple-600 text-white rounded-lg mr-4"
              onClick={handleGPTButtonClick}
            >
              {showGPTSearch ? "Home Page" : "GPT Search"}
            </button>
            <button
              className="bg-red-500 h-9 w-20 text-white rounded-lg ml-4"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
