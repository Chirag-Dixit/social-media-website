import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { connect } from "react-redux";
import { database } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const CreatePostBox = (prop) => {
  const { userData } = prop;
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const value = collection(database, 'posts')

    const handleCreate = async() => {
        await addDoc(value, {title: title, content: content, userName: userData.displayName, created: serverTimestamp(), likes: 0, commentsCount: 0, likesBy: [] })
        navigate('/')
    }

  return (
    <Stack
      direction="column"
      border="1px solid gainsboro"
      mt={2}
      padding={2}
      spacing={2}
      alignItems="left"
    >
      <Typography variant="title">
        What would you like to post today{" "}
        <Typography
          variant=""
          sx={{
            fontWeight: "bold",
          }}
        >
          {userData.displayName}
        </Typography>
        ?
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Title"
        variant="outlined"
        size="small"
        sx={{}}
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="Content"
        multiline
        rows={10}
        name="content"
        margin="normal"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button variant="outlined" onClick={handleCreate}>Submit</Button>
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
  };
};

export default connect(mapStateToProps, null)(CreatePostBox);
