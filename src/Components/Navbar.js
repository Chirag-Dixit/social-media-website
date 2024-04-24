import { Button, Select, Stack, TextField, Tooltip, Zoom } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import MoodIcon from "@mui/icons-material/Mood";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout, setSearch } from "../redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import SailingIcon from "@mui/icons-material/Sailing";
import PublicIcon from "@mui/icons-material/Public";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const { isLoggedIn, userData, logout } = props;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    props.setSearch(search);
  }, [search]);

  const userSignOut = async () => {
    await signOut(auth);
    window.location.reload(false);
  };

  const handleLogout = () => {
    logout();
    userSignOut();
    navigate("/");
  };

  useEffect(() => {
    //api call
    return () => {};
  }, []);

  return (
    <Stack
      direction="row"
      spacing={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <Tooltip title="Social Sailor">
        <Button
          sx={{
            color: "black",
          }}
        >
          <SailingIcon
            sx={{
              width: "45px",
              height: "45px",
            }}
          />
        </Button>
      </Tooltip>

      <TextField
        id="outlined-basic"
        label="Search for posts..."
        variant="outlined"
        size="small"
        sx={{}}
        autoComplete="off"
        value={search}
        onChange={handleChange}
      />
      <Stack direction="row" spacing={0} alignItems="center">
        <Link to="/">
          <Button>
            <HomeIcon
              fontSize="medium"
              sx={{
                color: "black",
              }}
            />
          </Button>
        </Link>

        {isLoggedIn ? (
          <div>
            <Button
              sx={{
                color: "black",
              }}
            >
              <MessageIcon fontSize="medium" />
            </Button>
            <Tooltip title={`${userData.displayName}`} arrow>
              <Link to="/profile">
                <Button>
                  <MoodIcon />
                </Button>
              </Link>
            </Tooltip>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button variant="text">Login</Button>
            </Link>
          </div>
        )}
      </Stack>
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    userData: state.login.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setSearch: (data) => dispatch(setSearch(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
