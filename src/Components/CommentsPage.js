import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import PostsCard from "./PostsCard";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Comments from "./comments/Comments";

const CommentsPage = (props) => {
  const { postId, userData } = props;
  const [content, setContent] = useState("");
  const [val, setVal] = useState([]);
  const value = collection(database, "posts");
  const commentsCollection = collection(database, 'posts', postId, 'comments')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getData();
  }, []);

  const posts = val.map((values, index) => {
    if (postId === values.id) {
      return <PostsCard values={values} key={index} commentDisabled={true} />;
    }
  });

  const handleSubmit = async() => {
    await addDoc(commentsCollection, {userName: userData.displayName, content: content, created: serverTimestamp(), })
    window.location.reload(false);
  }

  return (
    <Stack direction="column" spacing={2}>
      <Navbar />
      {loading ? <Loading /> : posts}
      <Stack direction='row' spacing={2} width='100%'>
        <Stack direction="column" spacing={2} width='55%'>
          <TextField
            label="What are your thoughts on this post?"
            multiline
            rows={5}
            margin="normal"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </Stack>
        {/* <Stack spacing={1} width='50%'> */}
          {/* <Typography variant="h6" color="gray">Comments</Typography> */}
          <Comments postId={postId} />
        {/* </Stack> */}
      </Stack>
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    postId: state.post.postId,
  };
};

export default connect(mapStateToProps, null)(CommentsPage);
