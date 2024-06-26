import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { login } from "../../redux/login/loginAction";
import { connect } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const LogIn = (prop) => {
  const { isLoggedIn, login } = prop;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    try {
      e.preventDefault();
      const data = await signInWithEmailAndPassword(auth, email, password);
      const displayName = data.user.displayName;
      const emailAdd = data.user.email;
      login({ displayName, emailAdd });
      navigate("/");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      textAlign="center"
      justifyContent="center"
      mt={10}
      component="form"
      onSubmit={signIn}
      sx={{}}
    >
      <h1
        style={{
          color: "grey",
        }}
      >
        Social Sailor
      </h1>
      <Box textAlign="center" mt={5}>
        <p
          style={{
            fontSize: "25px",
          }}
        >
          Login to Existing Account
        </p>
        <p
          style={{
            color: "grey",
          }}
        >
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
        <Stack direction="column" spacing={2} mb={2} alignItems="center">
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
            autoFocus
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
                Invalid Credentials / User Does not Exist
              </Typography>
            </Stack>
          )}

          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              width: "350px",
            }}
          >
            Login
          </Button>
        </Stack>

        <Link to="/">&lt;&lt;Back to Home Page</Link>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
