import { Button, Select, Stack, TextField, Tooltip, Zoom } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import MoodIcon from "@mui/icons-material/Mood";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import SailingIcon from "@mui/icons-material/Sailing";
import PublicIcon from '@mui/icons-material/Public';
import { useEffect } from "react";

const Navbar = (props) => {
  const { isLoggedIn, userData, logout } = props;

  const userSignOut = async () => {
    await signOut(auth);
    window.location.reload(false);
  };

  const handleLogout = () => {
    logout();
    userSignOut();
  };

  useEffect(()=>{
    //api call
    return ()=> {
      
    }
  }, [])

  return (
    <Stack
      direction="row"
      spacing={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <Tooltip title='This is the logo bdw'>
        <Button sx={{
          color: 'black',
        }}>
          <SailingIcon sx={{
            width: '45px',
            height: '45px'
          }}/>
        </Button>
      </Tooltip>

      <TextField
        id="outlined-basic"
        label="Search for posts..."
        variant="outlined"
        size="small"
        sx={{}}
      />
      <Stack direction="row" spacing={0}  alignItems='center'>
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
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
