import React from "react";
import { NETFLIX_LOGO_URL } from "../constants";
import { signOut } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  async function handleSignOut() {
    try {
      const signOutResponse = await signOut(auth);
      navigate("/");
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
