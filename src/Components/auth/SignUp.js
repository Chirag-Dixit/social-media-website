import { Box, Button, Stack, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { login } from "../../redux/login/loginAction";
import { connect } from "react-redux";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
    login(auth.currentUser.displayName);
    navigate("/");
  };

  return (
    <Box textAlign="center" mt={10}>
      <h1
        style={{
          color: "grey",
        }}
      >
        Logo/Name
      </h1>

      <Box textAlign="center" mt={5} component="form" onSubmit={signUp}>
        <p
          style={{
            fontSize: "25px",
          }}
        >
          Sign Up
        </p>
        <p
          style={{
            color: "grey",
          }}
        >
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
        <Stack direction="column" spacing={2} mb={2} alignItems='center'>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            required
            size="small"
            sx={{
              width: "350px",
            }}
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="email"
            id="email"
            label="Email Address"
            variant="outlined"
            required
            size="small"
            sx={{
              width: "350px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            required
            size="small"
            sx={{
              width: "350px",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" variant="contained" disableRipple sx={{
            width: '350px'
          }}>
            Sign Up
          </Button>
        </Stack>

        <Link to="/">&lt;&lt;Back to Home Page</Link>
      </Box>
    </Box>
  );
};

export default SignUp;
