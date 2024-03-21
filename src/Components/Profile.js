import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Box } from "@mui/material";

const Profile = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = async () => {
    const data = await signOut(auth);
  };
  return (
    <Box textAlign="center">
      {authUser ? (
        <>
          <p>Signed In! {`${authUser.displayName}`}</p>{" "}
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
      <Link to="/">&lt;&lt;Back to Home Page</Link>
    </Box>
  );
};

export default Profile;
