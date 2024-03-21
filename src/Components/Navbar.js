import { Button, Select, Stack, TextField, Tooltip, Zoom } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import MoodIcon from "@mui/icons-material/Mood";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = (props) => {
  const { isLoggedIn, userData, logout } = props;

  const userSignOut = async () => {
    await signOut(auth)
  }

  const handleLogout = () => {
    logout();
    userSignOut();
  };

  return (
    <Stack
      direction="row"
      spacing={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <h3>Logo</h3>
      <TextField
        id="outlined-basic"
        label="Search for posts..."
        variant="outlined"
        size="small"
        sx={{}}
      />
      <Stack direction="row" spacing={3} alignItems="center">
        <Link to="/">
          <HomeIcon
            fontSize="medium"
            sx={{
              color: "black",
            }}
          />
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
            <Tooltip title={`${userData.displayName}`} arrow >
              <Link to='/profile'>
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
  return{
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
