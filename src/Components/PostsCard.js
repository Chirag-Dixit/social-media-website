import { Button, Paper, Stack, Typography } from "@mui/material";
import { FieldValue, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setUserProfile } from "../redux/userProfile/userProfileAction";
import { connect } from "react-redux";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { setPostId } from "../redux/comment/postAction";
import CommentIcon from '@mui/icons-material/Comment';

const PostsCard = (prop) => {
  const { isLoggedIn, commentDisabled } = prop
  const { values, setUserProfile, userData } = prop;
  const {likesBy} = values
  const [liked, setLiked] = useState(likesBy?.includes(prop.userData?.displayName))
  const [likes, setLikes] = useState(values.likes)
  // const [comments, setComments] = useState(values.commnentsCount)
  const navigate = useNavigate()
  const handleClick = () => {
    setUserProfile(values);
  };
  let dateAndTime = {};
  let formatDate;

  const timeStamp = values.created;
  if (timeStamp) {
    const date = timeStamp.toDate();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().substr(-2);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    dateAndTime = {
      day,
      month,
      year,
      hours,
      minutes,
    };
    formatDate = `${day}/${month}/${year} ${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
    // console.log(formatDate);
  }

  const handleUpdate = async() => {
    if(isLoggedIn){
      setLiked(!liked)
      const updateData = doc(database, 'posts', values.id)
      if(liked){
        const newLikesBy = likesBy.filter(str => str!== prop.userData?.displayName)
        await updateDoc(updateData, {likes: likes-1, likesBy: newLikesBy})
        setLikes(likes-1)
      }else{
        likesBy.push(prop.userData?.displayName)
        await updateDoc(updateData, {likes: likes+1, likesBy: likesBy})
        setLikes(likes+1)
      }
    }else{
      navigate('/login')
    }
  }

  const handleComment = () => {
    if(isLoggedIn){
      prop.setPostId(values.id)
      navigate(`/post/${values.id}`)
    }else{
      navigate('/login')
    }
  }

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        width: "96%",
        height: "100%",
        padding: "10px",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
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
        <Typography variant="subtitle1" color="GrayText">
          {formatDate}
        </Typography>
      </Stack>
      <Typography variant="h6">
        {values.title}
      </Typography>
      {values.content}
      <br />
      <Stack direction='row' mt={2} justifyContent='space-between'>
        <Stack direction='row'>
          <Button onClick={handleUpdate}>{liked? <ThumbUpAltIcon />:<ThumbUpOffAltIcon />} {likes}</Button>
          {
            commentDisabled ? <div></div> : <Button onClick={handleComment}><CommentIcon /></Button>
          }
        </Stack>
      </Stack>
    </Paper>
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
    setUserProfile: (data) => dispatch(setUserProfile(data)),
    setPostId: (id) => dispatch(setPostId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsCard);
//login and sign up UI                        ------->done
//firebase authentication
//context api -> redux                        ---
