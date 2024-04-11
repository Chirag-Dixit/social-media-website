import { Button, Paper, Typography, Stack } from "@mui/material";
import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { setUserProfile } from "../redux/userProfile/userProfileAction";
import { connect } from "react-redux";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { setPostId } from "../redux/comment/postAction";

const TopPostCard = (prop) => {
  const { isLoggedIn, values, userData, setUserProfile } = prop;
  const handleClick = () => {
    setUserProfile(values);
  };
  const navigate = useNavigate();

  const handleComment = () => {
    if (isLoggedIn) {
      prop.setPostId(values.id);
      navigate(`/post/${values.id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <Stack
      elevation={0}
      spacing={1}
      sx={{
        border: "1px solid gainsboro",
        borderRadius: "5px",
        height: "fitContent",
        width: "80%",
        padding: "10px",
        // borderBottom: '20px solid gainsboro',
        borderRight: "20px solid gainsboro",
      }}
      className="topPostBox"
    >
      <Link
        to={
          userData?.displayName == values.userName
            ? "/profile"
            : `/users/${values.userName}`
        }
        onClick={handleClick}
      >
        {values.userName}
      </Link>
      <Typography variant="h6" color="black">
        {values.title}
      </Typography>
      <Stack direction="row" spacing={8}>
        <Stack direction="row" spacing={1}>
          <ThumbUpAltIcon color="primary" />
          <Typography>{values.likes}</Typography>
        </Stack>
        <Button onClick={handleComment}>
          <CommentIcon color="primary" />
        </Button>
      </Stack>
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (data) => dispatch(setUserProfile(data)),
    setPostId: (id) => dispatch(setPostId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPostCard);
