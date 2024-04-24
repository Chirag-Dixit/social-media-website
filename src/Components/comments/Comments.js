import React, { useEffect, useState } from "react";

import { database } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import PostsCard from "../PostsCard";
import CommentCard from "./CommentCard";
import { Grid, Typography } from "@mui/material";
import Loading from "../Loading";

const Comments = (props) => {
  const {postId} = props
  const [val, setVal] = useState([]);
  const value = collection(database, 'posts', postId, 'comments')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getData();
  }, []);
  const comments = val.map((values, index) => {
    return <CommentCard values={values} key={index} />
  })


  return (
    <div style={{
      width: '50%',
      height: '50%'
    }}>
      {loading? <Loading/> : comments.length==0?<Typography variant="h4" color={'gray'}>No Comments</Typography> : comments}
    </div>
  );
};

export default Comments;
