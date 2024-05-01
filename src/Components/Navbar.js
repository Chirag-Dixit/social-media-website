import { Button, Select, Stack, TextField, Tooltip, Zoom } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import MoodIcon from "@mui/icons-material/Mood";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const [width, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      direction={width < 600 ? "column" : "row"}
      spacing={2}
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

      {width >= 600 && (
        <TextField
          className="searchBar"
          id="outlined-basic"
          label="Search for posts..."
          variant="outlined"
          size="small"
          autoComplete="off"
          value={search}
          onChange={handleChange}
          disabled={location.pathname !== "/"}
          sx={{ flexGrow: 1, maxWidth: 300 }}
        />
      )}

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
          <Stack direction="row">
            <Tooltip title={"Feature Not Available Currently"} arrow>
              <Button
                sx={{
                  color: "black",
                }}
              >
                <MessageIcon fontSize="medium" />
              </Button>
            </Tooltip>
            <Tooltip title={`${userData.displayName}`} arrow>
              <Link to="/profile">
                <Button>
                  <MoodIcon />
                </Button>
              </Link>
            </Tooltip>
            <Button onClick={handleLogout}>Logout</Button>
          </Stack>
        ) : (
          <Stack direction="row">
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button variant="text">Login</Button>
            </Link>
          </Stack>
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
