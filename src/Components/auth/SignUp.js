import {
  Box,
  Button,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../../firebase";
import { login } from "../../redux/login/loginAction";
import { connect } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const SignUp = (props) => {
  const { login } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const value = collection(database, "users");
  const [error, setError] = useState(false);

  const handleUser = async (Email, Uname) => {
    await addDoc(value, { userEmail: Email, userName: Uname, bio: "", likesCount: 0, postsCount: 0 });
  };

  const signUp = async (e) => {
    try {
      e.preventDefault();
      let data = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      const emailAdd = data.user.email;
      const displayName = data.user.displayName;
      handleUser(emailAdd, displayName);
      login({ displayName, emailAdd });
      navigate("/");
    } catch (e) {
      setError(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box textAlign="center" mt={10}>
      <h1
        style={{
          color: "grey",
        }}
      >
        Social Sailor
      </h1>

      <Box textAlign="center" mt={5} component="form" onSubmit={signUp}>
        <p
          style={{
            fontSize: "25px",
          }}
        >
          Create an account!
        </p>
        <p
          style={{
            color: "grey",
          }}
        >
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
        <Stack direction="column" spacing={2} mb={2} alignItems="center">
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
            type={showPassword ? "text" : "password"}
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {!error ? (
            ""
          ) : (
            <Stack direction="row" spacing={1}>
              <ErrorOutlineIcon />
              <Typography variant="subtitle1" color="red">
                User Already Exists
              </Typography>
            </Stack>
          )}

          <Button
            type="submit"
            variant="contained"
            disableRipple
            sx={{
              width: "350px",
            }}
          >
            Sign Up
          </Button>
        </Stack>

        <Link to="/">&lt;&lt;Back to Home Page</Link>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
